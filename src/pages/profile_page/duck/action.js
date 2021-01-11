import axios from "axios";
import {urls} from "../../../constants";

export const editUserPassword = (user) => {
    const {
        id,
        password,
        name,
        login
    } = user
    return async function () {
        await axios.put(`${urls.AUTH}/${id}`, {
            password,
            name,
            login
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}