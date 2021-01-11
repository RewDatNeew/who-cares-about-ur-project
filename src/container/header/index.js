import React from 'react';
import './style.less';
import { Icon, IconButton } from "../../components";

export const Header = (props) => {
    const {
        user = {},
        logOut = () => console.log('logOut'),
    } = props;
    return (
        <div className="header">
                <div className="project-title">
                    <Icon name="project" size={22} />
                    <div className="title-header">
                        Who Cares About Ur Project?
                    </div>
                </div>
                { user.name !== null
                    ? <div className="user-control">
                        <div className="current-user">
                            <Icon name="user"/>
                        <div className="user">{user.name}</div>
                        </div>
                        <IconButton name="log-out" onClick={logOut} fill="#f0f8ff" />
                      </div>
                    : null
                }
        </div>
    )
}