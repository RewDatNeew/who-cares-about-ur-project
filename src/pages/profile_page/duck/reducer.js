import { actionTypes as types } from '../../../constants';

const initialState = {
    isOpenPasswordModal: false,

    newPassword: '',
};

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case types.PROFILE_UPDATE: {
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
