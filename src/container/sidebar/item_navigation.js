import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNavigation = (props) => {
    const { label = 'Пункт навигации', path } = props;
    return (
        <div>
            <NavLink
                to={`${path}`}
                title={label}
            >
                <button>
                    <span>{label}</span>
                </button>
            </NavLink>
        </div>
    )
}