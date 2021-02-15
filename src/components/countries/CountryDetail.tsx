import React from 'react'
import {Country} from "../../graphql/types";

interface IProps {
   country?: Country;
}

const CountryDetail = ({ country }: IProps) => {

   console.log('cou',country)
   return <div className='mt-8'>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
         <div className="flex-shrink-0">
            <img className="h-64 w-full object-cover"
                 src={`https://source.unsplash.com/450x450/?${country?.name?.split(' ').join('-')}`}
                 alt=""/>
         </div>
         <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
               <h3 className="mt-6 mb-10 text-gray-900 text-4xl leading-5 font-medium text-center">
                  {country?.name}
               </h3>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Alpha 2 Code:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                   {' '} {country?.alpha2Code}
                </span>
               </div>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Alpha 3 Code:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                   {' '} {country?.alpha3Code}
                </span>
               </div>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Capital:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                   {' '} {country?.capital}
                </span>
               </div>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Currency symbol:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                   {' '} {country?.currencies?.map((currency) => currency?.symbol).join(', ')}
                </span>
               </div>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Languages:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                     {' '} {country?.officialLanguages?.map((languages) => languages?.name).join(', ')}
                </span>
               </div>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Area:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                   {' '} {country?.area}
                </span>
               </div>
               <div className="flex items-center w-full justify-center mt-4">
                  <p className="text-2xl font-medium text-gray-900 leading-5">
                     Region:
                  </p>
                  <span className="ml-2 text-gray-500 text-2xl leading-5">
                     {' '} {country?.regionalBlocs?.map((region) => region?.name).join(', ')}
                </span>
               </div>


            </div>
         </div>
      </div>
   </div>
}

export default CountryDetail