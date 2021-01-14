import { actionTypes as types, urls, special } from '../../../constants';
import axios from 'axios';

export const getUsers = (params) => {
    return async function (dispatch) {
        await axios.get(`${urls.USERS}${special.json}`, {
            params,
        })
            .then((response) => {
                dispatch({
                    type: types.USERS_UPDATE,
                    payload: {
                        users: Object.entries(response.data).map((item) => {
                            item[1]['id'] = item[0]
                            return item[1]
                        }),
                        totalElements: response.data.length,
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
        await axios.post(`${urls.USERS}${special.json}`, {
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
       await axios.delete(`${urls.USERS}/${id}${special.json}`)
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
        await axios.put(`${urls.USERS}/${id}${special.json}`, {
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
        await axios.get(`${urls.USERS}?q=${search}${special.json}`)
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

export const getLimitedUsers = ({ page, size }) => {
    return async function (dispatch) {
        await axios.get(`${urls.USERS}?_limit=${size}&_page=${page}${special.json}`, )
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
