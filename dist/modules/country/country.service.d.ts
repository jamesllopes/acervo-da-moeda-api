import Country from './entities/country.entity';
import { AllCountriesInterface, CountriesInterface } from './interfaces/country';
export declare class CountryService {
    private readonly countryModel;
    constructor(countryModel: typeof Country);
    findAll(page?: number, perPage?: number): Promise<AllCountriesInterface>;
    findOne(id: string): Promise<CountriesInterface | null>;
}
