import React, {useCallback, useEffect, useState} from 'react';
import CountriesList from "./CountriesList";
import {useListCountries} from "./country.hooks";
import upperFirst from 'lodash/upperFirst'
import CurrencySelect from "../currency/CurrencySelect";
import RegionSelect from "../region/RegionSelect";
import LanguageSelect from "../language/LanguageSelect";

const Countries = () => {
    const [searchName, setSearchName] = useState<string>('')
    const [searchAlphaCode, setSearchAlphaCode] = useState<string>('')
    const [searchCurrency, setSearchCurrency] = useState<string>('')
    const [searchRegion, setSearchRegion] = useState<string>('')
    const [searchLanguage, setSearchLanguage] = useState<string>('')
    const handleChangeName = useCallback((e)=>{
        setSearchName(upperFirst(e.target.value))
    },[setSearchName])
    const {data: countries, isLoading, refetch} = useListCountries(
        {limit: 10, name: searchName, currency: searchCurrency, region: searchRegion, language: searchLanguage}
        )
    useEffect(()=>{
        refetch()
    },[])

    const handleSubmitSearch = useCallback((e)=> {
        e.preventDefault()
        refetch()
    },[])

    const handleChangeCurrency = useCallback((e) => {
       setSearchCurrency(e.target.value)
    }, [])
    const handleChangeLanguage = useCallback((e) => {
        setSearchLanguage(e.target.value)
    }, [])
    const handleChangeRegion = useCallback((e) => {
        setSearchRegion(e.target.value)
    }, [])
    const handleClickReset = useCallback(()=> {
        setSearchCurrency('')
        setSearchLanguage('')
        setSearchRegion('')
    },[])
    return <div>
        <form onSubmit={handleSubmitSearch}>
            <div className="flex flex-col sm:flex-row justify-between mt-4">
                <div className="w-full">
                    <input className="w-full px-8 py-3 form-input block border border-gray-300 rounded-md shadow-sm" value={searchName} onChange={handleChangeName} placeholder='Search by name' />
                </div>
                <div className="ml-0 sm:ml-4 text-center mt-2 sm:mt-0">
                    <button className="px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400" type="submit" >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around items-center mt-2 sm:mt-4 mx-auto md:mx-0">
                <div className="mx-0 sm:mr-4 w-full mt-2 sm:mt-0">
                    <CurrencySelect value={searchCurrency} onChange={handleChangeCurrency} />
                </div>
                <div className="mx-0 sm:mr-4 w-full mt-2 sm:mt-0">
                    <RegionSelect value={searchRegion} onChange={handleChangeRegion} />
                </div>
                <div className="mx-0 sm:mr-4 w-full mt-2 sm:mt-0">
                    <LanguageSelect value={searchLanguage} onChange={handleChangeLanguage} />
                </div>
                <div className="mt-2 sm:mt-0">
                    <button className="flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-400 hover:bg-red-300" type="button"  onClick={handleClickReset}>
                        Reset
                    </button>
                </div>
            </div>
        </form>

        {isLoading ? '...isLoading' :
            <CountriesList countries={countries} />
        }
    </div>

}

export default Countries