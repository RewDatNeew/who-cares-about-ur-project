import { actionTypes as types } from '../../../constants';

const initialState = {
    isOpenPasswordModal: false,

    hashedPass: '',
    isPass: false,
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
