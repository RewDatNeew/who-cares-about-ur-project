import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNavigation = (props) => {
    const { label = 'Пункт навигации', path, icon = {} } = props;
    return (
            <NavLink
                to={`${path}`}
                title={label}
                activeStyle={{
                    color: "#222830"
                }}
            >
                <div className="link">
                    <span className="icon">{icon}</span>
                    <span className="label">{label}</span>
                </div>
            </NavLink>
    )
}