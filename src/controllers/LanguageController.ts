import  {fetchGraphql} from "../clients/HttpClient";
import { listLanguages } from '../graphql/queries'
import { Language, ListLanguageQueryVariables} from "../graphql/types";

class LanguageController {
    static listLanguages = async (variables?: ListLanguageQueryVariables): Promise<Language[]> => {
        const response = await fetchGraphql(listLanguages, variables)
        return response.data.data.Language
    }
}

export default LanguageController