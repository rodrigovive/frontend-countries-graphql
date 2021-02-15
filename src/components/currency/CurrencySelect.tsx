import React, {useEffect, useMemo} from 'react';
import {useListCurrencies} from "./currency.hooks";
import Select from "../common/Select";

interface IProps {
    onChange?: React.FormEventHandler<HTMLSelectElement>;
    value?: string;
}

const CurrencySelect = ({ onChange, value }: IProps) => {
    const { data: currencies, isLoading, refetch } = useListCurrencies({})

    const options = useMemo(()=> {
        return Array.from(new Set(currencies?.map(({name}) => name))).sort().map((name) => ({name, value: name }));
    },[currencies])
    useEffect(()=>{
        refetch()
    },[])

    return <Select value={value} name={'currency'} id={'currency'} onChange={onChange} options={options} initialValue="Currency" />

}

export default React.memo(CurrencySelect)