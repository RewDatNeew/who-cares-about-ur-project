import React from 'react';
import { connect } from 'react-redux';
import './style.less';
import { Button } from "../../components";
import { getUsers } from "./duck/action";

const UsersPage = (props) => {
    // const updateStore = useUpdateStore({ type: types.USERS_UPDATE })
    const {
        users = []
    } = props.users;

    console.log({users})


    const handleGetUsers = () => {
        props.dispatch(getUsers());
    }

    return (
        <div className="users-page">
            <Button type='contained' title="Get Users" onClick={handleGetUsers}/>
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    };
})(UsersPage);