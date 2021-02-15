import React from 'react';
import {Country as CountryType} from "../../graphql/types";

interface IProps {
    country: CountryType
}

const Country = ({ country }: IProps) => {

    return <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
        <div className="flex-1 flex flex-col p-8">
            <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={`https://source.unsplash.com/150x150/?${country.name?.split(' ').join('-')}`}
                alt={`${country.name}`}
            />
            <h3 className="mt-6 text-gray-900 text-xl leading-5 font-medium">
                {country.name}
            </h3>
            <div className="flex items-center w-full justify-center mt-2">
                <p className="text-sm font-medium text-gray-900 leading-5">
                    Alpha 2 Code:
                </p>
                <span className="ml-2 text-gray-500 text-sm leading-5">
                   {' '} {country.alpha2Code}
                </span>
            </div>
        </div>
        <div className="border-t border-gray-200">
            <a href={`/country?id=${country._id}`} className="flex items-center justify-center px-3 py-1 text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-blue-300-300">
                View
            </a>
        </div>
    </li>

}

export default React.memo(Country)
