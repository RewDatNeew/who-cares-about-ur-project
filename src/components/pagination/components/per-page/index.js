import React, { useState, useEffect } from 'react';
import './style.less';

export const PerPage = ({
     size = 10,
     changeValuePerPage = () => console.log('changeValuePerPage'),
     updateStore = () => console.log('updateStore'),
     }) => {

    const [value, setValue] = useState(10);
    useEffect(() => {
        setValue(size);
    }, [size]);

    return (
        <div className="perPage">
            <input
                value={value}
                className="input"
                onChange={(e) => {
                    const val = e.target.value.trim();
                    if (!Number.isNaN(Number(val)) && val > 500) {
                        setValue(500);
                    } else if (!Number.isNaN(Number(val)) && val.length < 4) {
                        setValue(val);
                    }
                }}
                onKeyPress={(e) => {
                    if (e.charCode === 13 && +e.target.value > 0) {
                        changeValuePerPage(value);
                    }
                }}
                onBlur={() => {
                    updateStore({ size: value });
                    changeValuePerPage(value);
                }}
            />
        </div>
    );
};

