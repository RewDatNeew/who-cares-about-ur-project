import { actionTypes as types } from '../../../constants';

const initialState = {
    users: [],

    isOpenModal: false,

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
