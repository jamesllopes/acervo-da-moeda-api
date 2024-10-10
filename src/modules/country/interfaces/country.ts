export interface AllCountriesInterface {
  page: number;
  total: number;
  perPage: number;
  data: CountriesInterface[];
}
export interface CountriesInterface {
  id: string;
  name: string;
  symbol: string;
  locale: string;
  flag: string;
}
