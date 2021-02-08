import React from 'react';
import './style.less';
import { Icon, IconButton, Tooltip } from "../../components";

export const Header = (props) => {
    const {
        displayName = '',
        emailVerified = false,
        logOut = () => console.log('logOut'),
        handleSendVerification = () => console.log('handleSendVerification'),
    } = props;

    const verificationStyleName = emailVerified ? { color: '#f0f8ff' } : { color: '#ffcccb' }
    const verificationStyleIcon = emailVerified ? '#f0f8ff' : '#ffcccb';
    const userVerificationTooltip = emailVerified ? "Пользователь верифицирован" : "Пользователь не верифицирован"

    return (
        <div className="header">
                <div className="project-title">
                    <Icon name="project" size={22} />
                    <div className="title-header">
                        W.C.A.U.P.
                    </div>
                </div>

                    <div className="user-control">
                        <div className="current-user">
                            <Icon name="user" fill={verificationStyleIcon}/>
                            <Tooltip tooltipLabel={userVerificationTooltip} position="right">
                            <div className="user" style={verificationStyleName}>{displayName}</div>
                            </Tooltip>
                        </div>
                        {
                            !emailVerified
                                ? <Tooltip tooltipLabel="Отправить письмо с верификацией" position="right">
                                    <IconButton
                                    name="send-verification"
                                    onClick={handleSendVerification}
                                    fill="#f0f8ff"/>
                                </Tooltip>
                                : null
                        }
                        <Tooltip tooltipLabel="Выйти" position="right">
                            <IconButton name="log-out" onClick={logOut} fill="#f0f8ff" />
                        </Tooltip>
                    </div>
        </div>
    )
}