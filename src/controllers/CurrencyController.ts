import  {fetchGraphql} from "../clients/HttpClient";
import { listCurrencies } from '../graphql/queries'
import { Currency, ListCurrenciesQueryVariables} from "../graphql/types";

class CurrencyController {
    static listCurrencies = async (variables?: ListCurrenciesQueryVariables): Promise<Currency[]> => {
        const response = await fetchGraphql(listCurrencies, variables)
        return response.data.data.Currency
    }
}

export default CurrencyController