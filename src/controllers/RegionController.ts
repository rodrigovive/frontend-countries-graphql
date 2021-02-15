import  {fetchGraphql} from "../clients/HttpClient";
import { listRegions } from '../graphql/queries'
import { ListRegionsQueryVariables, Region} from "../graphql/types";

class RegionController {
    static listRegions = async (variables?: ListRegionsQueryVariables): Promise<Region[]> => {
        const response = await fetchGraphql(listRegions, variables)
        return response.data.data.Region
    }
}

export default RegionController
