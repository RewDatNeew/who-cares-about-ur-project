import { actionTypes as types, urls } from '../../../constants';
import axios from 'axios';

export const getUsers = (params) => {
    return async function (dispatch) {
        await axios.get(`${urls.USERS}`, {
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
        await axios.post(`${urls.USERS}`, {
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
       await axios.delete(`${urls.USERS}/${id}`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
            console.log(error);
        });
    }
}

export const editUser = (user) => {
    const {
        id,
        name,
        location,
        age
    } = user
    return async function () {
        await axios.put(`${urls.USERS}/${id}`, {
            name: name,
            location: location,
            age: age
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}

export const searchUser = (search) => {
    return async function (dispatch) {
        await axios.get(`${urls.USERS}?q=${search}`)
            .then(resp => {
                dispatch({
                    type: types.USERS_UPDATE,
                    payload: {
                        searchResult: resp.data,
                    },
                });
            }).catch(error => {
                console.log(error);
            });
    }
}