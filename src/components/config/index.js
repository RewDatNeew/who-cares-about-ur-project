import React from 'react';
import { Icon } from "../icon";

import './style.less';

export const Config = (props) => {
    const {
        iconName = '',
        headerTitle = '',
        children = null,
    } = props;

    return (
        <div className="control-section">
            <div className="control-header">
                <h4 className="control-label">
                  <span><Icon name={iconName} /></span>
                  <span className="title">{headerTitle}</span>
                </h4>
            </div>
            <div className="control-content">
                {children}
            </div>
        </div>
    );
};
