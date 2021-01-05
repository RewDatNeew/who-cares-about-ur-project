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
            })
            .catch((err) => {
                try {
                    const { data } = JSON.parse(JSON.stringify(err.response));
                    console.log('isResponse', data);
                } catch (e) {
                    console.log(e.toString());
                }
            });
    };
}