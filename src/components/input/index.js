import React from 'react';
import './style.less';

export const Input = (props) => {
    const {
        label = '',
        style = '',
        onChange = () => console.log('onChange'),
        currentValue = null,
        type = 'text',
    } = props;

    return (
        <div className="input-form">
            <span>{label}</span>
            <input
                defaultValue={currentValue}
                className="input"
                color={style}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}