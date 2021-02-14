import  {fetchGraphql} from "../clients/HttpClient";
import { listLanguages } from '../graphql/queries'
import {_LanguageFilter} from "../graphql/types";

class LanguageController {
    static listLanguages = async (filters?: _LanguageFilter) => {
        const response = await fetchGraphql(listLanguages, filters)
        return response.data
    }
}

export default LanguageController