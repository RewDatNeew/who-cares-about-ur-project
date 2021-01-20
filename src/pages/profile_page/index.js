import React from 'react';
import { connect } from "react-redux";
import './style.less';
import { editUserPassword } from './duck/action';
import { HeaderPage, Button } from "../../components";
import { ChangePasswordModal } from "./modals";
import {useInput, useUpdateStore} from "../../hooks";
import { actionTypes as types } from "../../constants";
import { useSnackbar } from "notistack";

const ProfilePage = (props) => {
    const {
        currentUser = {}
    } = props.app;

    const updateStore = useUpdateStore({ type: types.PROFILE_UPDATE })
    const { enqueueSnackbar } = useSnackbar()

    const {
        isOpenPasswordModal = false,
        currentPassword = '',
        newPassword = ','
    } = props.profile;

    const {
        login, name, password, id
    } = currentUser;

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

    const currentPasswordInput = useInput({
        type: 'password',
        updateStore,
        name: 'currentPassword',
        label: 'Current Password'
    })

    const newPasswordInput = useInput({
        type: 'password',
        updateStore,
        name: 'newPassword',
        label: 'New Password'
    })

    const reloadPage = () => {
        window.location.reload(false)
    }

    const handleChangePassword = async () => {
        if (currentPassword === password) {
            if (newPassword !== password) {
                const user = {
                    id,
                    login: login,
                    name: name,
                    password: newPassword
                }
                await props.dispatch(editUserPassword(user))
                enqueueSnackbar(`Пароль успешно изменен`)

                const storageUser = {
                    id: btoa(id),
                    password: btoa(newPassword),
                    login,
                    name,
                }
                localStorage.setItem('user', JSON.stringify(storageUser))
                handleCloseModal();
                setTimeout(reloadPage, 3000)
            } else {
                enqueueSnackbar(`Новый пароль совпадает с текущим`)
            }
        } else {
            enqueueSnackbar(`Введеный пароль не совпадает с текущим`)
        }
    }

    return (
        <div className="profile-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
            <ChangePasswordModal
                currentPasswordInput={currentPasswordInput}
                newPasswordInput={newPasswordInput}
                handleChangePassword={handleChangePassword}
                isOpenPasswordModal={isOpenPasswordModal}
                handleCloseModal={handleCloseModal}
            />
            <div className="current-user">
                <div className="info">
                    <span>Имя: {name}</span>
                    <span>Логин: {login}</span>
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
        app: store.app,
    }
})(ProfilePage)