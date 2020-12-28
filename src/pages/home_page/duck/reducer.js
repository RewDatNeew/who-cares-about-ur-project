import { actionTypes as types } from '../../../constants';

const initialState = {

};

export const home = (state = initialState, action) => {
    switch (action.type) {
        case types.HOME_UPDATE: {
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
