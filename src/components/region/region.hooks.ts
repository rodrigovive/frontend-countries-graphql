import { useQuery } from "react-query";
import { ListRegionsQueryVariables, RegionalBloc} from "../../graphql/types";
import RegionController from "../../controllers/RegionController";

const getRegions = async ({ }: ListRegionsQueryVariables): Promise<RegionalBloc[]> => {
    try {
        return RegionController.listRegions({})
    } catch (e) {
        return [];
    }
};

export const useListRegions = ( {}: ListRegionsQueryVariables) => {
    return useQuery<RegionalBloc[], any>(["regions"], (_key) => getRegions({}), { enabled: false });
}
