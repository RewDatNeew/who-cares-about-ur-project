import {fb} from "../../../index";
import {useNotification} from "../../../hooks/useNotification";

export const changeUserPassword = (password) => {
    const user = fb.auth().currentUser;
    return async function (dispatch) {
        user.updatePassword(password).then(function() {
            useNotification({message: 'Пароль обновлен', dispatch})
        }).catch(function(error) {
            useNotification({message: error, dispatch})
        })
    }
}

