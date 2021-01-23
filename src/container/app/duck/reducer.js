import { actionTypes as types } from '../../../constants';

const initialState = {
    currentUser: {
        login: '',
        name: '',
        password: '',
        rights: '',
        id: 0,
    },
};

export const app = (state = initialState, action) => {
    switch (action.type) {
        case types.APP_UPDATE: {
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
