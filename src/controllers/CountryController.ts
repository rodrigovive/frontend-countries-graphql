import  {fetchGraphql} from "../clients/HttpClient";
import { listCountries } from '../graphql/queries'
import {Country, ListCountriesQueryVariables} from "../graphql/types";

class CountryController {
    static listCountries = async (variables?: ListCountriesQueryVariables): Promise<Country[]> => {
        const response = await fetchGraphql(listCountries, variables)
        return response.data.data.Country
    }
}

export default CountryController