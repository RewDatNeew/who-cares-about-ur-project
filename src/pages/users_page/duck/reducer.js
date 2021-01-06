import { actionTypes as types } from '../../../constants';

const initialState = {
    users: [],

    isOpenModalEdit: false,
    isOpenModalAdd: false,

    search: '',
    searchResult: [],

    id: 0,
    name: '',
    location: '',
    age: 0,

    currentUser: {
        id: 0,
        name: '',
        location: '',
        age: '',
    }
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS_UPDATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
