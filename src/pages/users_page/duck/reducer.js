import { actionTypes as types } from '../../../constants';

const initialState = {

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
