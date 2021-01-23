import axios from "axios";
import { actionTypes as types, urls, special } from "../../../constants";

export const getAuthUsers = (params) => {
    return async function (dispatch) {
        await axios.get(`${urls.AUTH}${special.json}`, {
            params,
        })
            .then((response) => {
                dispatch({
                    type: types.AUTH_UPDATE,
                    payload: {
                        authUsers: Object.entries(response.data).map((item) => {
                            item[1]['id'] = item[0]
                            return item[1]
                        }),
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
        login,
        rights,
    } = user;

    return async function () {
        await axios.post(`${urls.AUTH}${special.json}`, {
            name: name,
            surname: surname,
            password: password,
            login: login,
            rights: rights,
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}