import { useQuery } from "react-query";
import {Currency,ListCurrenciesQueryVariables} from "../../graphql/types";
import CurrencyController from "../../controllers/CurrencyController";

const getCurrencies = async ({ currency = "" }: ListCurrenciesQueryVariables): Promise<Currency[]> => {
    try {
        const data = await CurrencyController.listCurrencies({currency})
        return data
    } catch (e) {
        return [];
    }
};

export const useListCurrencies = ( {currency}: ListCurrenciesQueryVariables) => {
    return useQuery<Currency[], any>(["currencies"], (_key) => getCurrencies({currency}), { enabled: false });
}
