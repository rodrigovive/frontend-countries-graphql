import CountryController from "../../controllers/CountryController";
import { useQuery } from "react-query";

const getCountries = async ({ name }: {name: string}): Promise<any> => {
    try {
        const data = await CountryController.listCountries({name})
        return data
    } catch (e) {
        return [];
    }
};

export const useListCountries = (name: string) => {
    return useQuery<any, any>(["countries", {name}], (_key) => getCountries({name}), { enabled: true });
}