import  {fetchGraphql} from "../clients/HttpClient";
import { listCountries } from '../graphql/queries'
import { ListCountriesQuery, ListCountriesQueryVariables} from "../graphql/types";

class CountryController {
    static listCountries = async (filters?: ListCountriesQueryVariables): Promise<ListCountriesQuery> => {
        const response = await fetchGraphql(listCountries, filters)
        return response.data
    }
}

export default CountryController