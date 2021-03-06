import { actionTypes as types } from '../../../constants';

const initialState = {
    isOpenSignInModal: false,
    isOpenResetPasswordModal: false,

    displayName: '',
    password: '',
    email: '',

    rights: '',
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
