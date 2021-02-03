import { fb } from "../../../index";
import {actionTypes as types} from "../../../constants";
import { useNotification } from "../../../hooks/useNotification";

export const signUpUser = (authUser) => {
    const {
        email, password, displayName
    } = authUser;

    const rights = 'SIMPLE';

    return async function (dispatch) {
        await fb.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                useNotification({message: `Пользователь ${user.user.email} успешно создан`, dispatch })
                dispatch({
                    type: types.APP_UPDATE,
                    payload: {
                        currentUser: {}
                    },
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                useNotification({message: errorMessage, dispatch})
            });

        const user = fb.auth().currentUser;

        await user?.updateProfile({
            displayName: displayName,
            photoURL: rights
        }).then(function() {
            console.log('updated')
        }).catch(function(error) {
            console.log({error})
        });
    }
}

export const signInUser = (authUser) => {
    const {
        email, password
    } = authUser;

    return async function (dispatch) {
        await fb.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({
                    type: types.APP_UPDATE,
                    payload: {
                        currentUser: user
                    },
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                useNotification({message: errorMessage, dispatch})
                console.log({errorCode, errorMessage})
            });
    }
}

export const signOut = () => {
    return async function (dispatch) {
        await fb.auth().signOut().then(() => {
            useNotification({message: 'Sign-out successful', dispatch})
            console.log('Sign-out successful')
            dispatch({
                type: types.APP_UPDATE,
                payload: {
                    currentUser: {}
                },
            });
        }).catch((error) => {
            console.log({error})
        });
    }
}

// export const authStateChange = () => {
//     return async function (dispatch) {
//         fb.auth().onAuthStateChanged((user) => {
//             if (user) {
//                 dispatch({
//                     type: types.APP_UPDATE,
//                     payload: {
//                         currentUser: user
//                     },
//                 });
//             } else {
//                 // User is signed out
//                 // ...
//             }
//         });
//     }
// }

export const changePassword = (email) => {
    const auth = fb.auth();
    return async function (dispatch) {
        auth.sendPasswordResetEmail(email).then(function() {
            useNotification({message: 'Письмо с восстановлением отправлено', dispatch})
        }).catch(function(error) {
            // An error happened.
        });
    }
}