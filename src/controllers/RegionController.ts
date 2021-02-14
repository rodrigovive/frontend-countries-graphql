import  {fetchGraphql} from "../clients/HttpClient";
import { listRegions } from '../graphql/queries'
import {_RegionFilter} from "../graphql/types";

class RegionController {
    static listRegions = async (filters?: _RegionFilter) => {
        const response = await fetchGraphql(listRegions, filters)
        return response.data
    }
}

export default RegionController
