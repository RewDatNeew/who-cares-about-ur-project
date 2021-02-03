import React from 'react';
import { connect } from "react-redux";
import './style.less';
import { HeaderPage, Button } from "../../components";
import { ChangePasswordModal } from "./modals";
import {useInput, useUpdateStore} from "../../hooks";
import { actionTypes as types } from "../../constants";
import { changeUserPassword } from "./duck/action";

const ProfilePage = (props) => {
    const {
        currentLoggedUser = {}
    } = props.currentUser;

    const updateStore = useUpdateStore({ type: types.PROFILE_UPDATE })

    const {
        isOpenPasswordModal = false,
        newPassword = '',
    } = props.profile;

    const handleOpenPasswordModal = () => {
        updateStore({
            isOpenPasswordModal: !isOpenPasswordModal,
        })
    }

    const handleCloseModal = () => {
        updateStore({
            isOpenPasswordModal: false,
        })
    }

    const newPasswordInput = useInput({
        type: 'password',
        updateStore,
        name: 'newPassword',
        label: 'New Password'
    })

    const handleChangePassword = () => {
        props.dispatch(changeUserPassword(newPassword))
        handleCloseModal();
    }

    return (
        <div className="profile-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
            <ChangePasswordModal
                newPasswordInput={newPasswordInput}
                handleChangePassword={handleChangePassword}
                isOpenPasswordModal={isOpenPasswordModal}
                handleCloseModal={handleCloseModal}
            />
            <div className="current-user">
                <div className="info">
                    <span>Имя: {currentLoggedUser.displayName}</span>
                    <span>e-mail: {currentLoggedUser.email}</span>
                </div>
                <div className="info-control">
                    <Button title="Change Password" onClick={handleOpenPasswordModal} />
                </div>
            </div>
        </div>
    )
}

export default connect((store) => {
    return {
        profile: store.profile,
        currentUser: store.currentUser,
    }
})(ProfilePage)