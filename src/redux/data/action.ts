import { CityEntry } from '../../constants/city-config';
import { Dispatch } from 'redux';

export const SET_PALETTE_CITY_CONFIG = 'SET_PALETTE_CITY_CONFIG';

export type setPaletteCityConfigAction = {
    type: typeof SET_PALETTE_CITY_CONFIG;
    paletteCityConfig: CityEntry[];
};

const setPaletteCityConfig = (paletteCityConfig: CityEntry[]): setPaletteCityConfigAction => {
    return { type: SET_PALETTE_CITY_CONFIG, paletteCityConfig };
};

export const fetchPaletteCityConfig = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch('https://railmapgen.github.io/rmg-palette/resources/city-config.json');
            if (response.ok) {
                const data = (await response.json()) as CityEntry[];
                dispatch(setPaletteCityConfig(data));
            }
        } catch (err) {
            console.error('Failed to fetch palette city config.', err);
        }
    };
};
