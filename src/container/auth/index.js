import React from 'react';
import './style.less';
import { Button, Icon } from "../../components";
import { connect } from "react-redux";
import { useInput, useUpdateStore } from "../../hooks";
import { actionTypes as types } from "../../constants";
import { signInUser, signUpUser, changePassword } from "./duck/action";
import { ResetPassModal, SignInModal } from "./modals";

const Auth = (props) => {
    const {
        displayName,
        password,
        isOpenSignInModal = false,
        isOpenResetPasswordModal = false,
        email,
    } = props.auth;

    const updateStore = useUpdateStore({ type: types.AUTH_UPDATE })

    const handleOpenSignIn = () => {
        updateStore({
            isOpenSignInModal: !isOpenSignInModal,
        })
    }

    // LOG IN /////////////////////////////////////////////////////////////////////

    const emailLogInInput = useInput({
        updateStore,
        name: 'email',
        label: 'e-mail'
    })
    const passwordLogInInput = useInput({
        type: 'password',
        updateStore,
        name: 'password',
        label: 'пароль'
    })


    // SIGN IN (ALL THIS PROPS TO MODAL SIGN IN COMPONENT) ////////////////////////

    const nameSignInInput = useInput({
        updateStore,
        name: 'displayName',
        label: 'имя'
    })

    const emailSignInInput = useInput({
        updateStore,
        name: 'email',
        label: 'e-mail'
    })

    const passwordSignInInput = useInput({
        type: 'password',
        updateStore,
        name: 'password',
        label: 'пароль'
    })

    const handleCloseModal = () => {
        updateStore({
            isOpenSignInModal: false,
            isOpenResetPasswordModal: false,
        })
    }

    const handleSignUp = async () => {
            const authUser = {
                email,
                password,
                displayName,
            }
        await props.dispatch(signUpUser(authUser));
        handleCloseModal();
    }

    const handleSignIn = async () => {
        const user = {
            email,
            password
        }
        await props.dispatch(signInUser(user));
    }

    const handleOpenResetPasswordModal = () => {
        updateStore({
            isOpenResetPasswordModal: !isOpenResetPasswordModal,
        })
    }

    const handleChangePassword = () => {
        props.dispatch(changePassword(email))
        handleCloseModal()
    }

    return (
        <div className="auth">
            <Icon name="user" size={40}/>
            <SignInModal
                isOpenSignInModal={isOpenSignInModal}
                handleSignIn={handleSignUp}
                handleCloseModal={handleCloseModal}
                nameSignInInput={nameSignInInput}
                emailSignInInput={emailSignInInput}
                passwordSignInInput={passwordSignInInput}
            />
            <ResetPassModal
                isOpenResetPasswordModal={isOpenResetPasswordModal}
                handleCloseModal={handleCloseModal}
                emailSignInInput={emailSignInInput}
                handleChangePassword={handleChangePassword}
            />
            <div className="input-zone">
                {emailLogInInput}
                {passwordLogInInput}
            </div>
            <div className="button-zone">
                <Button title="Вход" onClick={handleSignIn} />
                <Button title="Регистрация" onClick={handleOpenSignIn} />
                <Button title="Восстановление пароля" onClick={handleOpenResetPasswordModal} />
            </div>
        </div>
    )
}

export default connect((store) => {
    return {
        auth: store.auth,
        app: store.app
    }
})(Auth)