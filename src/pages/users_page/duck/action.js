import { actionTypes as types, urls } from '../../../constants';
import axios from 'axios';

export const getUsers = (params) => {
    return async function (dispatch) {
        axios.get(`${urls.USERS}`, {
            params,
        })
            .then((response) => {
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
        name,
        location,
        age
    } = user;

    return async function () {
        axios.post(`${urls.USERS}`, {
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

export const deleteUser = (id) => {
    return async function () {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
            console.log(error);
        });
    }
}