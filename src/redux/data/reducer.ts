import { CityEntry } from '../../constants/city-config';
import { SET_PALETTE_CITY_CONFIG, setPaletteCityConfigAction } from './action';

interface DataState {
    paletteCityConfig: CityEntry[];
}

const initialState: DataState = {
    paletteCityConfig: [],
};

export default function DataReducer(state = initialState, action: setPaletteCityConfigAction) {
    switch (action.type) {
        case SET_PALETTE_CITY_CONFIG:
            state.paletteCityConfig = action.paletteCityConfig;
            break;
        default:
            break;
    }

    return { ...state };
}
