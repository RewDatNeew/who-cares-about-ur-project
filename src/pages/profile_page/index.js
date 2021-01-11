import React from 'react';
import {connect} from "react-redux";
import './style.less';


const ProfilePage = (props) => {
    const {
        currentUser = {}
    } = props.app;

    console.log({currentUser})

    const {
        login, name, password, id
    } = currentUser;

    return (
        <div className="contentGrid profile-page">
            <div className="profile-header">Profile Page</div>

            <div className="current-user">
                <span>Имя пользователя: {name}</span>
                <span>Логин пользователя: {login}</span>
                <span>Пароль пользователя: {password}</span>
            </div>
        </div>
    )
}

export default connect((store) => {
    return {
        profile: store.profile,
        app: store.app,
    }
})(ProfilePage)