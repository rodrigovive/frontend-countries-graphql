import  {fetchGraphql} from "../clients/HttpClient";
import { listRegions } from '../graphql/queries'
import {ListRegionsQueryVariables, RegionalBloc} from "../graphql/types";

class RegionController {
    static listRegions = async (variables?: ListRegionsQueryVariables): Promise<RegionalBloc[]> => {
        const response = await fetchGraphql(listRegions, variables)
        return response.data.data.RegionalBloc
    }
}

export default RegionController
