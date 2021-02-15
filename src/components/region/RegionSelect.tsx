import React, {useEffect, useMemo} from 'react';
import {useListRegions} from "./region.hooks";
import Select from "../common/Select";

interface IProps {
    onChange?: React.FormEventHandler<HTMLSelectElement>;
    value?: string;
}

const RegionSelect = ({onChange, value}: IProps) => {
    const { data: regions, isLoading, refetch } = useListRegions({})

    const options = useMemo(()=> {
        return Array.from(new Set(regions?.map(({name}) => name))).sort().map((name) => ({name, value: name }));
    },[regions])
    useEffect(()=>{
        refetch()
    },[])

    return <Select value={value} name={'region'} id={'region'} onChange={onChange} options={options} initialValue="Region" />


}

export default React.memo(RegionSelect)
