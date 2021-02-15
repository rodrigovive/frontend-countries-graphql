import React from 'react';
import {Country as CountryType} from "../../graphql/types";
import Country from "./Country";

interface IProps {
    countries?: CountryType[];
}

const CountriesList= ({ countries = [] }: IProps) => {

    return <div className="my-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {countries?.map((country: CountryType) => {
                return <Country country={country} key={country._id} />
            })}
        </ul>
    </div>
}

export default React.memo(CountriesList)