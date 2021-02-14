import React from 'react'

declare namespace IInput {
    export interface IProps {
        value?: string | number;
        onChange?: React.FormEventHandler<HTMLInputElement>;
    }
}

export { IInput };
