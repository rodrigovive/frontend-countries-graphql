import React from 'react';

interface IProps {
    value?: string | number;
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

const Input: React.FunctionComponent<IProps> = ({value, onChange}): JSX.Element => {

    return <input value={value} onChange={onChange} className='input' />
}

export default Input;
