import { actionTypes as types, urls } from '../../../constants';
import axios from 'axios';

export const getUsers = (params) => {
    return async function (dispatch) {
        axios.get(`${urls.USERS}`, {
            params,
        })
            .then((response) => {
                console.log({response})
                dispatch({
                    type: types.USERS_UPDATE,
                    payload: {
                        users: response.data,
                    },
                });
            }).catch(error => {
            console.log(error);
        });
    };
}

export const addUser = (user) => {
    const {
        id,
        name,
        location,
        age
    } = user;

    return async function () {
        axios.post(`${urls.USERS}`, {
            id: id,
            name: name,
            location: location,
            age: age,
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}