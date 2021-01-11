import React  from 'react';
import './style.less';

export const useInput = ({
         type = 'text',
         updateStore = {},
         name = '',
         label = '',
         currentValue = ''
    }) => {

    const changeInput = (e) => {
        updateStore({
            [name]: e.target.value
        })
    }
    return (
        <div className="input-form">
        <span>{label}</span>
        <input
            defaultValue={currentValue}
            className="input"
            onChange={changeInput}
            type={type}
        />
        </div>
    );
}