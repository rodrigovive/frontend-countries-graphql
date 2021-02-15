import CountryController from "../../controllers/CountryController";
import { useQuery } from "react-query";
import {
    Country,
    ListCountriesQueryVariables,
} from "../../graphql/types";

const getCountries = async ({ name, limit, currency = "", language = "", region = "", alpha2Code }: ListCountriesQueryVariables): Promise<Country[]> => {
    try {
        return CountryController.listCountries({name, limit, currency, region, language, alpha2Code})
    } catch (e) {
        return [];
    }
};

export const useListCountries = ( {name, limit, currency, region, language, alpha2Code}: ListCountriesQueryVariables) => {
    return useQuery<Country[], any>(["countries"], (_key) => getCountries({name, limit, currency, region, language, alpha2Code}), { enabled: false });
}