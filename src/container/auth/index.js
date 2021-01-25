import React, { useEffect } from 'react';
import './style.less';
import { Button, Icon } from "../../components";
import { connect } from "react-redux";
import { useInput, useUpdateStore, useNotification } from "../../hooks";
import { actionTypes as types } from "../../constants";
import { signInUser, signUpUser, authStateChange } from "./duck/action";
import { SignInModal } from "./modals";

const Auth = (props) => {
    const {
        displayName,
        password,
        isOpenSignInModal = false,
        email,
    } = props.auth;

    useEffect(() => {
        props.dispatch(authStateChange())
    }, [])

    const updateStore = useUpdateStore({ type: types.AUTH_UPDATE })

    const handleOpenSignIn = () => {
        updateStore({
            isOpenSignInModal: !isOpenSignInModal,
        })
    }

    // LOG IN /////////////////////////////////////////////////////////////////////

    const loginLogInInput = useInput({
        updateStore,
        name: 'email',
        label: 'email'
    })
    const passwordLogInInput = useInput({
        type: 'password',
        updateStore,
        name: 'password',
        label: 'password'
    })


    // SIGN IN (ALL THIS PROPS TO MODAL SIGN IN COMPONENT) ////////////////////////

    const nameSignInInput = useInput({
        updateStore,
        name: 'displayName',
        label: 'name'
    })

    const loginSignInInput = useInput({
        updateStore,
        name: 'email',
        label: 'email'
    })

    const passwordSignInInput = useInput({
        type: 'password',
        updateStore,
        name: 'password',
        label: 'password'
    })

    const handleCloseModal = () => {
        updateStore({
            isOpenSignInModal: false,
        })
    }

    const handleSignUp = async () => {
            const authUser = {
                email,
                password,
                displayName,
            }
        await props.dispatch(signUpUser(authUser));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNotification({message: `Пользователь ${email} успешно создан`})
        handleCloseModal();
    }

    const handleSignIn = async () => {
        const user = {
            email,
            password
        }
        await props.dispatch(signInUser(user));
    }

    return (
        <div className="auth">
            <Icon name="user" size={40}/>
            <SignInModal
                isOpenSignInModal={isOpenSignInModal}
                handleSignIn={handleSignUp}
                handleCloseModal={handleCloseModal}
                nameSignInInput={nameSignInInput}
                loginSignInInput={loginSignInInput}
                passwordSignInInput={passwordSignInInput}
            />
            <div className="input-zone">
                {loginLogInInput}
                {passwordLogInInput}
            </div>
            <div className="button-zone">
                <Button title="Sign In" onClick={handleOpenSignIn} />
                <Button title="Log In" onClick={handleSignIn} />
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