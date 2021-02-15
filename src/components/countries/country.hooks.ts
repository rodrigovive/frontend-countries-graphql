import CountryController from "../../controllers/CountryController";
import { useQuery } from "react-query";
import {
    Country, GetCountryQuery, GetCountryQueryVariables, ListCountriesQuery,
    ListCountriesQueryVariables,
} from "../../graphql/types";

const getCountries = async ({ name, limit, currency = "", language = "", region = "", alpha2Code }: ListCountriesQueryVariables): Promise<Country[]> => {
    try {
        return CountryController.listCountries({name, limit, currency, region, language, alpha2Code})
    } catch (e) {
        return [];
    }
};

const getCountry = async ({id}: GetCountryQueryVariables): Promise<Country> => {
   try{
      const [country] = await CountryController.getCountry({id})
       return country
   } catch(e){
       throw e;
   }
}

export const useListCountries = ( {name, limit, currency, region, language, alpha2Code}: ListCountriesQueryVariables) => {
    return useQuery<Country[], any>(["countries"], (_key) => getCountries({name, limit, currency, region, language, alpha2Code}), { enabled: false });
}

export const useGetCountry = ({id}: GetCountryQueryVariables) => {
    return useQuery<Country, any>(['country', id], (_key) => getCountry({id}))
}