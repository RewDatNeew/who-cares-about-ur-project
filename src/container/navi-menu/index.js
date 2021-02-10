import React from 'react'
import { routes } from "../../routes";
import { ItemNavigation } from "./item_navigation";
import './style.less'
import { isRight } from "../../helpers/isRight";

export const NaviMenu = (props) => {
    const { rightsArr = [] } = props;
    return (
        <div className="navi-menu">
            <nav>
                <ul className="list">
                    {routes
                        .filter((item) => {
                            const isVisible = isRight({rights: item.rights, userRights: rightsArr});
                            return isVisible || !item.rights.length;
                        })
                        .map((m, i) => <ItemNavigation {...m} key={i} />)}
                </ul>
            </nav>
        </div>
    )
}