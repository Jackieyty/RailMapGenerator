import * as React from 'react';
import { ParamContext } from '../../../context';
import { StationsGZMTR } from '../methods/gzmtr';
import StationGZMTR from './station/station-gzmtr';
import LineBox from './line-box-gzmtr';
import { InterchangeInfo, StationInfo } from '../../../types';
import { adjacencyList, criticalPathMethod } from '../methods/share';

const wideFactor = (stnList: { [stnId: string]: StationInfo }, stnId: string) =>
    stnList[stnId].parents.length === 2 || stnList[stnId].children.length === 2 ? 0.25 : 0;

const getXShare = (stnId: string, adjMat: ReturnType<typeof adjacencyList>, branches: string[][]): number => {
    let criticalPath = criticalPathMethod('linestart', 'lineend', adjMat);
    if (criticalPath.nodes.includes(stnId)) {
        return criticalPathMethod(criticalPath.nodes[1], stnId, adjMat).len;
    } else {
        // must has 1 parent and 1 child only
        let branchOfStn = branches.filter(branch => branch.includes(stnId))[0];
        let partSource = stnId;
        while (!criticalPath.nodes.includes(partSource)) {
            partSource = branchOfStn[branchOfStn.indexOf(partSource) - 1];
        }
        let partSink = stnId;
        while (!criticalPath.nodes.includes(partSink)) {
            partSink = branchOfStn[branchOfStn.indexOf(partSink) + 1];
        }

        let leftOpenJaw = partSource === 'linestart';
        let rightOpenJaw = partSink === 'lineend';

        if (branchOfStn.toString() === branches[0].toString()) {
            // station on main line, expand to fit
            let lens = [];
            if (!leftOpenJaw && !rightOpenJaw) {
                lens[0] = criticalPathMethod(criticalPath.nodes[1], partSource, adjMat).len;
                lens[1] = criticalPathMethod(partSource, partSink, adjMat).len;
                lens[2] = criticalPathMethod(partSource, stnId, adjMat).len;
                lens[3] = criticalPathMethod(stnId, partSink, adjMat).len;
            } else if (leftOpenJaw) {
                lens[0] = 0;
                lens[1] = criticalPathMethod(criticalPath.nodes[1], partSink, adjMat).len;
                lens[2] = criticalPathMethod(branchOfStn[1], stnId, adjMat).len;
                lens[3] = criticalPathMethod(stnId, partSink, adjMat).len;
            } else {
                // right open jaw
                lens[0] = criticalPathMethod(criticalPath.nodes[1], partSource, adjMat).len;
                lens[1] = criticalPathMethod(partSource, criticalPath.nodes.slice(-2)[0], adjMat).len;
                lens[2] = criticalPathMethod(partSource, stnId, adjMat).len;
                lens[3] = criticalPathMethod(stnId, branchOfStn.slice(-2)[0], adjMat).len;
            }
            return lens[0] + (lens[2] * lens[1]) / (lens[2] + lens[3]);
        } else {
            if (!leftOpenJaw && !rightOpenJaw) {
                let lens = [];
                lens[0] = criticalPathMethod(criticalPath.nodes[1], partSource, adjMat).len;
                lens[1] = criticalPathMethod(partSource, partSink, adjMat).len;
                lens[2] = criticalPathMethod(partSource, stnId, adjMat).len;
                lens[3] = criticalPathMethod(stnId, partSink, adjMat).len;
                return lens[0] + (lens[2] * lens[1]) / (lens[2] + lens[3]);
            } else if (leftOpenJaw) {
                return (
                    criticalPathMethod(criticalPath.nodes[1], partSink, adjMat).len -
                    criticalPathMethod(stnId, partSink, adjMat).len
                );
            } else {
                // right open jaw
                return (
                    criticalPathMethod(criticalPath.nodes[1], partSource, adjMat).len +
                    criticalPathMethod(partSource, stnId, adjMat).len
                );
            }
        }
    }
};

const MainGZMTR = () => {
    const { param, branches, routes, deps } = React.useContext(ParamContext);

    const adjMat = adjacencyList(param.stn_list, wideFactor, wideFactor);

    const xShares = React.useMemo(() => {
        console.log('computing x shares');
        return Object.keys(param.stn_list).reduce(
            (acc, cur) => ({ ...acc, [cur]: getXShare(cur, adjMat, branches) }),
            {}
        );
    }, [branches.toString(), JSON.stringify(adjMat)]);

    const criticalPath = criticalPathMethod('linestart', 'lineend', adjMat);
    const realCP = criticalPathMethod(criticalPath.nodes[1], criticalPath.nodes.slice(-2)[0], adjMat);

    const lineXs: [number, number] =
        param.direction === 'r'
            ? [(param.svg_width * param.padding) / 100 + 65, param.svg_width * (1 - param.padding / 100) - 20]
            : [(param.svg_width * param.padding) / 100, param.svg_width * (1 - param.padding / 100) - 65];
    const xs = Object.keys(xShares).reduce(
        (acc, cur) => ({ ...acc, [cur]: lineXs[0] + (xShares[cur] / realCP.len) * (lineXs[1] - lineXs[0]) }),
        {} as typeof xShares
    );

    const yShares = React.useMemo(() => {
        console.log('computing y shares');
        return Object.keys(param.stn_list).reduce((acc, cur) => {
            if (branches[0].includes(cur)) {
                return { ...acc, [cur]: 0 };
            } else {
                let branchOfStn = branches.slice(1).filter(branch => branch.includes(cur))[0];
                return { ...acc, [cur]: param.stn_list[branchOfStn[0]].children.indexOf(branchOfStn[1]) ? -2 : 2 };
            }
        }, {} as { [stnId: string]: number });
    }, [deps]);
    const ys = Object.keys(yShares).reduce(
        (acc, cur) => ({ ...acc, [cur]: -yShares[cur] * param.branch_spacing }),
        {} as typeof yShares
    );

    let stnStates = {} as { [stnId: string]: -1 | 0 | 1 };
    Object.keys(param.stn_list).forEach(
        stnId => (stnStates[stnId] = StationsGZMTR.getStnState(stnId, param.current_stn_idx, param.direction, routes))
    );

    const linePaths = StationsGZMTR.drawLine(
        branches,
        stnStates,
        param.stn_list,
        lineXs,
        xs,
        ys,
        param.branch_spacing,
        criticalPath
    );

    return (
        <g
            id="main"
            style={{
                ['--y-percentage' as any]: param.y_pc,
                transform: 'translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))',
            }}
        >
            <Line paths={linePaths} />
            <StationGroup xs={xs} ys={ys} stnStates={stnStates} />
            <g
                id="line_name"
                style={{
                    ['--translate-x' as any]: param.direction == 'r' ? `${lineXs[0] - 65}px` : `${lineXs[1] + 65}px`,
                }}
            >
                <LineBox
                    info={
                        ([
                            ,
                            ,
                            'var(--rmg-theme-colour)',
                            'var(--rmg-theme-fg)',
                            param.line_name[0],
                            param.line_name[1],
                        ] as any) as InterchangeInfo
                    }
                    stnState={1}
                />
            </g>
        </g>
    );
};

export default MainGZMTR;

const Line = (props: { paths: { main: string[]; pass: string[] } }) => {
    return (
        <g style={{ fill: 'none', strokeWidth: 4 }}>
            <g style={{ stroke: '#aaa', strokeDasharray: 4 }}>
                {props.paths.pass.map((path, i) => (
                    <path key={i} d={path} />
                ))}
            </g>
            <g style={{ stroke: 'var(--rmg-theme-colour)' }}>
                {props.paths.main.map((path, i) => (
                    <path key={i} d={path} />
                ))}
            </g>
        </g>
    );
};

interface StationGroupProps {
    xs: { [stnId: string]: number };
    ys: { [stnId: string]: number };
    stnStates: { [stnId: string]: -1 | 0 | 1 };
}

const StationGroup = (props: StationGroupProps) => {
    const { param } = React.useContext(ParamContext);

    return (
        <g id="stn_icons">
            {Object.keys(param.stn_list).map(stnId => {
                if (['linestart', 'lineend'].includes(stnId)) return;
                return (
                    <g
                        key={stnId}
                        style={{
                            transform: `translate(${props.xs[stnId]}px,${props.ys[stnId]}px)`,
                        }}
                    >
                        <StationGZMTR stnId={stnId} stnState={props.stnStates[stnId]} stnY={props.ys[stnId]} />
                    </g>
                );
            })}
        </g>
    );
};