import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack'
import './style.less';
import {Button, Icon, Input} from "../../components";
import { connect } from "react-redux";
import { useUpdateStore } from "../../hooks";
import { actionTypes as types } from "../../constants";
import { addAuthUser, getAuthUsers } from "./duck/action";
import { SignInModal } from "./modals";

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

    const handleOpenSignIn = () => {
        updateStore({
            isOpenSignInModal: !isOpenSignInModal,
        })
    }

    const loginsArr = authUsers.map((item) => {
        return item.login;
    })


    // LOG IN /////////////////////////////////////////////////////////////////////

    const handleEnterLoginName = (e) => {
        updateStore({
            login: e.target.value,
        })
    }

    const handleEnterLoginPassword = (e) => {
        updateStore({
            password: e.target.value,
        })
    }

    const handleLogIn = () => {
        if (loginsArr.includes(login)) {
            const idxLogin = authUsers.findIndex(x => x.login === login);
            const certainObj = authUsers[idxLogin];
            const user = {
                login,
                name: certainObj.name,
                password: btoa(certainObj.password),
                id: btoa(certainObj.id)
            }

            if (certainObj.password === password) {
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

    const handleChangeName = (e) => {
        updateStore({
            name: e.target.value,
        })
    }
    const handleChangeLogin = (e) => {
        updateStore({
            login: e.target.value,
        })
    }
    const handleChangePassword = (e) => {
        updateStore({
            password: e.target.value,
        })
    }

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
                handleChangeName={handleChangeName}
                handleChangeLogin={handleChangeLogin}
                handleChangePassword={handleChangePassword}
            />
            <div className="input-zone">
                <Input
                    label='login'
                    onChange={handleEnterLoginName}
                />
                <Input
                    type="password"
                    label='password'
                    isPassword
                    onChange={handleEnterLoginPassword}
                />
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