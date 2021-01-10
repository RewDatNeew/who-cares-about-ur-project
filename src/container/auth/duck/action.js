import axios from "axios";
import { actionTypes as types, urls } from "../../../constants";

export const getAuthUsers = (params) => {
    return async function (dispatch) {
        await axios.get(`${urls.AUTH}`, {
            params,
        })
            .then((response) => {
                dispatch({
                    type: types.AUTH_UPDATE,
                    payload: {
                        authUsers: response.data,
                    },
                });
            }).catch(error => {
                console.log(error);
            });
    };
}

export const addAuthUser = (user) => {
    const {
        name,
        surname,
        password,
        login
    } = user;

    return async function () {
        await axios.post(`${urls.AUTH}`, {
            name: name,
            surname: surname,
            password: password,
            login: login,
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}