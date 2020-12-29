import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNavigation = (props) => {
    const { label = 'Пункт навигации', path, icon = {} } = props;
    return (
        <div>
            <NavLink
                to={`${path}`}
                title={label}
            >
                <li>{icon}<span>{label}</span></li>
            </NavLink>
        </div>
    )
}