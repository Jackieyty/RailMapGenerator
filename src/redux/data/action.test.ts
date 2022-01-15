import { createMockAppStore } from '../../setupTests';
import rootReducer from '../index';
import { fetchPaletteCityConfig, SET_PALETTE_CITY_CONFIG } from './action';
import { CityEntry } from '../../constants/city-config';

const realStore = rootReducer.getState();
const mockStore = createMockAppStore({ ...realStore });

const originalFetch = global.fetch;

describe('Unit tests for data actions', () => {
    afterEach(() => {
        global.fetch = originalFetch;
        jest.clearAllMocks();
        mockStore.clearActions();
    });

    it('Can fetch palette city list and save to store', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        id: 'guangzhou',
                        country: 'CN',
                        name: {
                            en: 'Guangzhou',
                            'zh-Hans': '广州',
                            'zh-Hant': '廣州',
                        },
                    },
                ]),
        });

        await mockStore.dispatch(fetchPaletteCityConfig());

        expect(global.fetch).toBeCalledTimes(1);
        expect(global.fetch).toBeCalledWith(expect.stringContaining('/rmg-palette/resources/city-config'));

        const actions = mockStore.getActions();
        expect(actions).toHaveLength(1);
        expect(
            actions.find(action => action.type === SET_PALETTE_CITY_CONFIG && action.paletteCityConfig.length === 1)
        ).toBeDefined();
    });
});
