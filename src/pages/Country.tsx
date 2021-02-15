import React from 'react';
import {useGetCountry} from "../components/countries/country.hooks";
import {
    useParams,
    Link
} from "react-router-dom";
import CountryDetail from "../components/countries/CountryDetail";

interface IParams {
    id: string;
}

const Country = () => {
    const { id } = useParams<IParams>();
    const {data: country, isLoading} = useGetCountry({id})


    return <div
        className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div>
            <Link to="/"
               className="font-medium text-blue-600 hover:text-blue-900 focus:text-blue-700">
                Back
            </Link>
        </div>
        <h1 className="text-center text-4xl tracking-tight leading-6 font-extrabold text-gray-700">
            Country id:{` ${id}`}
        </h1>
        {isLoading ? '' :
            <CountryDetail country={country} />
        }
    </div>
}
export default Country