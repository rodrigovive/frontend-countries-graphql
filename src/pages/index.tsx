import React from 'react';
import Countries from "../components/countries/Countries";

const Home = () => {
   return <div
           className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
       <h1 className="text-center text-4xl tracking-tight leading-6 font-extrabold text-gray-700">
           List Countries
       </h1>
       <Countries />
   </div>
}

export default Home;