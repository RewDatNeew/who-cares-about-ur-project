import React from 'react';
import './style.less';
import {Icon} from "../icon";

export const HeaderPage = (props) => {
    const {
        title = '', icon = '', info = '',
    } = props;
    return (
        <div className="header-page">
            <div className="title-zone">
                <span className="header-icon">{icon}</span>
                <span className="header-title">{title}</span>
            </div>
            {info
            ? <div className="info-zone">
                <Icon name="info" />
                <span>{info}</span>
              </div>
            : null}
        </div>
    )
}