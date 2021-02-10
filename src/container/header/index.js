import React from 'react';
import './style.less';
import { Icon, IconButton, Tooltip } from "../../components";
import {NaviMenu} from "../navi-menu";

export const Header = (props) => {
    const {
        displayName = '',
        emailVerified = false,
        logOut = () => console.log('logOut'),
        handleSendVerification = () => console.log('handleSendVerification'),
        rightsArr = [],
    } = props;

    const verificationStyleName = emailVerified ? { color: '#939597' } : { color: '#ffcccb' }
    const verificationStyleIcon = emailVerified ? '#939597' : '#ffcccb';
    const userVerificationTooltip = emailVerified ? "Пользователь верифицирован" : "Пользователь не верифицирован"

    return (
        <div className="header">
            <div className="project-navi">
                <div className="project-title">
                    <Icon name="project" size={22} />
                    <div className="title-header">
                        W.C.A.U.P.
                    </div>
                </div>
                <NaviMenu rightsArr={rightsArr} />
            </div>
            <div className="user-control">
                <div className="current-user">
                    <Icon name="user" fill={verificationStyleIcon}/>
                    <Tooltip tooltipLabel={userVerificationTooltip} position="left">
                        <div className="user" style={verificationStyleName}>{displayName}</div>
                    </Tooltip>
                </div>
                {
                    !emailVerified
                        ? <Tooltip tooltipLabel="Отправить письмо с верификацией" position="left">
                            <IconButton
                                name="send-verification"
                                onClick={handleSendVerification}
                                fill="#939597"/>
                        </Tooltip>
                        : null
                }
                <Tooltip tooltipLabel="Выйти" position="left">
                    <IconButton name="log-out" onClick={logOut} fill="#939597" />
                </Tooltip>
            </div>
        </div>
    )
}