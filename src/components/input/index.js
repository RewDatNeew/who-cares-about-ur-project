import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Input = (props) => {
    const {
        label = '',
        type = '',
        onChange = () => console.log('onChange'),
    } = props;

    return (
        <div className="input-form">
            <TextField
                id="standard-search"
                label={label}
                type={type ? type : ''}
                onChange={onChange}
            />
        </div>
    )
}