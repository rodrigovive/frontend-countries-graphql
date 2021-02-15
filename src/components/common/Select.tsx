import React from 'react';
import clsx from 'clsx'

interface Option {
    name: string;
    value:string | undefined;
}

interface IProps {
    value?: string;
    name: string;
    id: string;
    options: Option[];
    className?: string;
    onChange?: React.FormEventHandler<HTMLSelectElement>;
    initialValue?: string;
}

const Select = ({id, options, className, onChange, initialValue = "", name, value}: IProps ) => {

    return <select value={value} name={name} onChange={onChange}  id={id} className={clsx("px-2 md:px-8 form-select block w-full text-sm leading-5 border border-gray-300 rounded-md shadow-sm", className)}>
        <option value={''}>{initialValue}</option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>{option.name}</option>
        ))}
    </select>
}

export default Select