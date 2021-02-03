import { actionTypes as types } from '../../../constants';

const initialState = {
    currentLoggedUser: {
        displayName: '',
        rights: '',
        email: '',
    }
};

export const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case types.CURRENT_USER_UPDATE: {
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