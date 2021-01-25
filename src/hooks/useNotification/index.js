import { actionTypes as types } from "../../constants";

export const useNotification = ({message = '', dispatch}) => {
    return dispatch({
        type: types.APP_UPDATE,
        payload: {
            notification: message
        },
    });
}

