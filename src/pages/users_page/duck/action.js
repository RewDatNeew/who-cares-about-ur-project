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

// export const searchUser = (filter) => {
//     const key = Object.keys(filter).toString();
//     const prepareValue = Object.values(filter)
//     const value = prepareValue[0].value
//
//     return async function (dispatch) {
//         await axios.get(`${urls.USERS}${special.json}?orderBy="$value"&startAt=${value}&endAt=${value}&print=pretty`)
//             .then(resp => {
//                 dispatch({
//                     type: types.USERS_UPDATE,
//                     payload: {
//                         filteredUsers: Object.entries(resp.data).map((item) => {
//                             item[1]['id'] = item[0]
//                             return item[1]
//                         }),
//                     },
//                 });
//             }).catch(error => {
//                 console.log(error);
//             });
//     }
// }

// export const getLimitedUsers = () => {
//     return async function (dispatch) {
//         await axios.get(`${urls.USERS}${special.json}?shallow=true`, )
//             .then((response) => {
//                 dispatch({
//                     type: types.USERS_UPDATE,
//                     payload: {
//                         paginatedUsers: Object.keys(response.data),
//                     },
//                 });
//             }).catch(error => {
//                 console.log(error);
//             });
//     };
// }
