import { useQuery } from "react-query";
import {Region,ListRegionsQueryVariables} from "../../graphql/types";
import RegionController from "../../controllers/RegionController";

const getRegions = async ({ }: ListRegionsQueryVariables): Promise<Region[]> => {
    try {
        return RegionController.listRegions({})
    } catch (e) {
        return [];
    }
};

export const useListRegions = ( {}: ListRegionsQueryVariables) => {
    return useQuery<Region[], any>(["regions"], (_key) => getRegions({}), { enabled: false });
}
