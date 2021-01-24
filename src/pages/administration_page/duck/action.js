import axios from "axios";
import {actionTypes as types, special, urls} from "../../../constants";

export const addUserToRegistered = (user) => {
    const {
        name,
        password,
        login,
        rights,
    } = user;

    return async function () {
        await axios.post(`${urls.REGISTERED}${special.json}`, {
            name,
            password,
            login,
            rights,
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}

// export const editRegisteredPassword = (user) => {
//     const {
//         id,
//         name,
//         password,
//         login,
//         rights,
//     } = user
//
//     return async function () {
//         await axios.put(`${urls.REGISTERED}/${id}${special.json}`, {
//             name,
//             password,
//             login,
//             rights,
//         }).then(resp => {
//             console.log(resp.data);
//         }).catch(error => {
//             console.log(error);
//         });
//     }
// }

// export const getRegisteredUsers = (params) => {
//     return async function (dispatch) {
//         await axios.get(`${urls.REGISTERED}${special.json}`, {
//             params,
//         })
//             .then((response) => {
//                 dispatch({
//                     type: types.ADMIN_UPDATE,
//                     payload: {
//                         registered: Object.entries(response.data).map((item) => {
//                             item[1]['id'] = item[0]
//                             return item[1]
//                         }),
//                     },
//                 });
//             }).catch(error => {
//                 console.log(error);
//             });
//     };
// }