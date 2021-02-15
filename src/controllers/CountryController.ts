import  {fetchGraphql} from "../clients/HttpClient";
import {getCountry, listCountries} from '../graphql/queries'
import {
    Country,
    GetCountryQueryVariables,
    ListCountriesQueryVariables
} from "../graphql/types";

class CountryController {
    static listCountries = async (variables?: ListCountriesQueryVariables): Promise<Country[]> => {
        const response = await fetchGraphql(listCountries, variables)
        return response.data.data.Country
    }

    static getCountry = async (variables: GetCountryQueryVariables): Promise<Country[]> => {
        const response = await fetchGraphql(getCountry, variables)
        return response.data.data.Country
    }
}

export default CountryController