import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    ListItem,
    ListItemIcon,
    Icon,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { RMGParam, canvasConfig, AllCanvas } from '../../constants/constants';
import { useAppSelector } from '../../redux';
import { selectCanvas } from '../../redux/app/action';
import { updateParam } from '../../utils';
import { reRenderApp } from '../../index';

export default function UploadLi() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { canvasToShow } = useAppSelector(state => state.app);

    const [open, setOpen] = React.useState(false);
    const [importedParam, setImportedParam] = React.useState({} as RMGParam);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files![0]);
        let filePromise = new Promise((resolve: (event: ProgressEvent<FileReader>) => void) => {
            let reader = new FileReader();
            reader.onloadend = resolve;
            reader.readAsText(event.target.files![0]);
        });
        filePromise
            .then(e => JSON.parse(e.target!.result as string))
            .then(param => {
                setImportedParam(param);
                setOpen(true);
            });
    };

    const handleClose = (action: string) => async () => {
        if (action === 'close') {
            (document.getElementById('upload-param') as HTMLInputElement).value = '';
            setOpen(false);
            return;
        }
        if (action === 'accept') {
            try {
                const updatedParam = updateParam(importedParam) as RMGParam;
                await window.rmgStorage.writeFile('rmgParam', JSON.stringify(updatedParam));

                // reset to AllCanvas if current canvas is not supported in the new style
                const canvas = canvasConfig[importedParam.style].some(c => c === canvasToShow)
                    ? canvasToShow
                    : AllCanvas;
                dispatch(selectCanvas(canvas));
                reRenderApp(updatedParam);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <>
            <ListItem button component="label" htmlFor="upload-param">
                <ListItemIcon>
                    <Icon>folder_open</Icon>
                </ListItemIcon>
                <ListItemText primary={t('file.open.button')} />
            </ListItem>
            <input
                type="file"
                accept="application/json"
                style={{ display: 'none' }}
                id="upload-param"
                onChange={handleUpload}
            />
            <ImportDialog open={open} onClose={handleClose} content={importedParam} />
        </>
    );
}

interface ImportDialogProps {
    onClose: (action: string) => () => void;
    open: boolean;
    content: {} | RMGParam;
}

function ImportDialog(props: ImportDialogProps) {
    const { t } = useTranslation();

    const describeParams = (param: RMGParam) => {
        return `Number of stations: ${Object.keys(param.stn_list).length - 2}
                ${Object.entries(param.stn_list)
                    .map(x => (['linestart', 'lineend'].includes(x[0]) ? '' : x[1].name.join(' - ')))
                    .join('\r\n')
                    .trim()
                    .replace(/\\/, ' ')}`;
    };

    return (
        <Dialog onClose={props.onClose('close')} open={props.open}>
            <DialogTitle>Your Configuration</DialogTitle>
            <DialogContent dividers>
                <DialogContentText style={{ whiteSpace: 'pre-line' }}>
                    {Object.keys(props.content).length === 0 ? 'empty' : describeParams(props.content as RMGParam)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose('close')} color="primary">
                    {t('dialog.cancel')}
                </Button>
                <Button onClick={props.onClose('accept')} color="primary" autoFocus>
                    Import
                </Button>
            </DialogActions>
        </Dialog>
    );
}
