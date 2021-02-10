import React from 'react';
import { NavLink } from 'react-router-dom';
import {Tooltip} from "../../components/tooltip";

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
                    <Tooltip tooltipLabel={label} position="bottom">
                        <span className="icon">{icon}</span>
                    </Tooltip>
                </div>
            </NavLink>
    )
}