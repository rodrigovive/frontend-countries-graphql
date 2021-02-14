import React from 'react';
import {IInput} from "./Input";

const Input: React.FunctionComponent<IInput.IProps> = ({value, onChange}): JSX.Element => {

   return <input value={value} onChange={onChange} className='input' />
}

export default Input;