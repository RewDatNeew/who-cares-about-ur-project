import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack'
import './style.less';
import { Button, Icon } from "../../components";
import { connect } from "react-redux";
import { useInput, useUpdateStore } from "../../hooks";
import { actionTypes as types } from "../../constants";
import { addAuthUser, getAuthUsers } from "./duck/action";
import { SignInModal } from "./modals";
const bcrypt = require('bcryptjs');

const Auth = (props) => {
    const {
        name,
        login,
        password,
        authUsers = [],
        isOpenSignInModal = false,
    } = props.auth;

    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        props.dispatch(getAuthUsers())
    }, [])

    const updateStore = useUpdateStore({ type: types.AUTH_UPDATE })
    const updateStoreProfile = useUpdateStore({ type: types.PROFILE_UPDATE })

    const handleOpenSignIn = () => {
        updateStore({
            isOpenSignInModal: !isOpenSignInModal,
        })
    }

    const loginsArr = authUsers.map((item) => {
        return item.login;
    })



    // LOG IN /////////////////////////////////////////////////////////////////////

    const loginLogInInput = useInput({
        updateStore,
        name: 'login',
        label: 'login'
    })
    const passwordLogInInput = useInput({
        type: 'password',
        updateStore,
        name: 'password',
        label: 'password'
    })



    const handleLogIn = () => {
        if (loginsArr.includes(login)) {
            const idxLogin = authUsers.findIndex(x => x.login === login);
            const certainObj = authUsers[idxLogin];
            const user = {
                login,
                name: certainObj.name,
                password: certainObj.password,
                id: certainObj.id,
                rights: certainObj.rights,
            }

            const isPass = bcrypt.compareSync(password, certainObj.password)

            updateStoreProfile({ isPass, hashedPass: certainObj.password })

            if (isPass) {
                localStorage.setItem('isLogin', 'true');
                localStorage.setItem('user', JSON.stringify(user))
                window.location.reload(false);
            } else {
                return enqueueSnackbar(`Неверный пароль`)
            }
        } else {
            return enqueueSnackbar(`Пользователь ${login} не найден`)
        }
    }


    // SIGN IN (ALL THIS PROPS TO MODAL SIGN IN COMPONENT) ////////////////////////

    const nameSignInInput = useInput({
        updateStore,
        name: 'name',
        label: 'name'
    })

    const loginSignInInput = useInput({
        updateStore,
        name: 'login',
        label: 'login'
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

    const handleSignIn = async () => {
        if (!loginsArr.includes(login)) {
            const authUser = {
                name,
                login,
                password,
                rights: 'SIMPLE'
            }
            await props.dispatch(addAuthUser(authUser));
            enqueueSnackbar(`Пользователь ${login} успешно создан`)
            window.location.reload(false);
            handleCloseModal();
        } else {
            return enqueueSnackbar(`Пользователь с логином ${login} уже существует`)
        }
    }

    return (
        <div className="auth">
            <Icon name="user" size={40}/>
            <SignInModal
                isOpenSignInModal={isOpenSignInModal}
                handleSignIn={handleSignIn}
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
                <Button title="Log In" onClick={handleLogIn} />
            </div>
        </div>
    )
}

export default connect((store) => {
    return {
        auth: store.auth,
    }
})(Auth)