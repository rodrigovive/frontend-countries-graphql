import { useQuery } from "react-query";
import {Language,ListLanguageQueryVariables} from "../../graphql/types";
import LanguageController from "../../controllers/LanguageController";

const getLanguages = async ({ }: ListLanguageQueryVariables): Promise<Language[]> => {
    try {
        return LanguageController.listLanguages({})
    } catch (e) {
        return [];
    }
};

export const useListLanguages = ( {}: ListLanguageQueryVariables) => {
    return useQuery<Language[], any>(["languages"], (_key) => getLanguages({}), { enabled: false });
}
