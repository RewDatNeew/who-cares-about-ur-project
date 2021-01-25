import { fb } from "../../../index";
import {actionTypes as types} from "../../../constants";
import { useNotification } from "../../../hooks/useNotification";

export const signUpUser = (authUser) => {
    const {
        email, password, displayName
    } = authUser;

    const rights = 'SIMPLE';

    return async function () {
        await fb.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log({user})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({errorCode, errorMessage})
            });

        const user = fb.auth().currentUser;

        await user.updateProfile({
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
        }).catch((error) => {
            console.log({error})
        });
    }
}

export const authStateChange = () => {
    return async function (dispatch) {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: types.APP_UPDATE,
                    payload: {
                        currentUser: user
                    },
                });
            } else {
                // User is signed out
                // ...
            }
        });
    }
}