import { CountryService } from './country.service';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    getAllCountries(page?: string, perPage?: string): Promise<import("./interfaces/country").AllCountriesInterface>;
    getOneCountrie(id: string): Promise<import("./interfaces/country").CountriesInterface>;
}
