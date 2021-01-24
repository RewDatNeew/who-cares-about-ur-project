import axios from "axios";
import { urls ,special } from "../../../constants";
const bcrypt = require('bcryptjs');

export const editUserPassword = (user) => {
    const {
        id,
        password,
        name,
        login,
        rights,
    } = user

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return async function () {
        await axios.put(`${urls.AUTH}/${id}${special.json}`, {
            password: hash,
            name,
            login,
            rights
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}