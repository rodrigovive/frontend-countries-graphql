import  {fetchGraphql} from "../clients/HttpClient";
import { listCurrencies } from '../graphql/queries'
import {_CurrencyFilter} from "../graphql/types";

class CurrencyController {
    static listCurrencies = async (filters?: _CurrencyFilter) => {
        const response = await fetchGraphql(listCurrencies, filters)
        return response.data
    }
}

export default CurrencyController