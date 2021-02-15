import React, {useEffect, useMemo} from 'react';
import {useListLanguages} from "./language.hooks";
import Select from "../common/Select";

interface IProps {
    onChange?: React.FormEventHandler<HTMLSelectElement>;
    value?: string;
}

const LanguageSelect = ({onChange, value}: IProps) => {
    const { data: languages, isLoading, refetch } = useListLanguages({})

    const options = useMemo(()=> {
        return Array.from(new Set(languages?.map(({name}) => name))).sort().map((name) => ({name, value: name }));
    },[languages])
    useEffect(()=>{
        refetch()
    },[])

    return <Select value={value} name={'language'} id={'language'} options={options} initialValue="Language" onChange={onChange} />


}

export default React.memo(LanguageSelect)
