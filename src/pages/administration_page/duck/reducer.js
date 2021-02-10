import { actionTypes as types } from '../../../constants';

const initialState = {
    usersList: [],
};

export const admin = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_UPDATE: {
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
