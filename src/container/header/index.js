import React from 'react';
import './style.less';
import { Icon } from "../../components";

export const Header = () => {
    return (
        <div className="header">
            <Icon name="project" size={22} />
            <div className="title-header">
                Who Cares About Ur Project?
            </div>
        </div>
    )
}