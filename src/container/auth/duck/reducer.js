import { actionTypes as types } from '../../../constants';

const initialState = {
    authUsers: [],
    isLogin: false,

    isOpenSignInModal: false,

    name: '',
    password: '',
    login: '',
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_UPDATE: {
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
