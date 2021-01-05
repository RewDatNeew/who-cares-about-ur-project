import React from 'react'
import { routes } from "../../routes";
import { ItemNavigation } from "./item_navigation";
import './style.less'

export const SideBar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul className="list">
                    {routes.map((m, i) => <ItemNavigation {...m} key={i} />)}
                </ul>
            </nav>
        </div>
    )
}