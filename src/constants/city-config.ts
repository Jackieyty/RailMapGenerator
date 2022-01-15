import { Translation } from './constants';

export interface CityEntry {
    id: string;
    /**
     * ISO 3166-1 alpha-2 country code. (For cities in Britain, append BS 6879 subdivision code. )
     */
    country: string;
    /**
     * Key-value pairs of multi-lingual names of the city.
     */
    name: Translation;
}
