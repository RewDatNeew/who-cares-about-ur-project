import React from 'react';
import './style.less';

export const HeaderPage = (props) => {
    const {
        title = '', icon = ''
    } = props;
    return (
        <div className="header-page">
            {icon}<span className="header-title">{title}</span>
        </div>
    )
}