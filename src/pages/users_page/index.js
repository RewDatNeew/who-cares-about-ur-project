import React, {useEffect, useState} from 'react';
import { actionTypes as types } from '../../constants';
import { connect } from 'react-redux';
import { Button, Table } from "../../components";
import { useUpdateStore } from "../../hooks";
import { isEmpty } from "../../helpers";
import { getUsers, addUser } from "./duck/action";
import { Config } from "./components";

import './style.less';

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Location',
        accessor: 'location',
    },
    {
        Header: 'Age',
        accessor: 'age',
    }
]

const UsersPage = (props) => {

    const updateStore = useUpdateStore({ type: types.USERS_UPDATE })
    const [openForm, setOpenForm] = useState(false)

    const handleOpenForm = () => {
        setOpenForm(!openForm);
    }

    const {
        users = [],
        name = '',
        location = '',
        age = 0,
    } = props.users;

    const handleGetUsers = () => {
        props.dispatch(getUsers());
    }

    useEffect(() => {
        handleGetUsers()
    }, [])


    const handleChangeName = (e) => {
        const payload = {
            name: e.target.value,
        }
        updateStore(payload);
    }
    const handleChangeLocation = (e) => {
        const payload = {
            location: e.target.value,
        }
        updateStore(payload);
    }
    const handleChangeAge = (e) => {
        const payload = {
            age: e.target.value,
        }
        updateStore(payload);
    }

    const user = {
        name,
        location,
        age,
    }

    const handleAddUser = async () => {
        await props.dispatch(addUser(user));
        props.dispatch(getUsers());
    }

    return (
        <div className="users-page">
            <span className="btn"><Button type='contained' title="Form Control" onClick={handleOpenForm} /></span>
            { openForm ? <Config
                handleChangeName={handleChangeName}
                handleChangeLocation={handleChangeLocation}
                handleChangeAge={handleChangeAge}
                handleAddUser={handleAddUser}
            /> : null }
            {!isEmpty(users) ? <Table columns={columns} data={users} /> : null}
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    }
})(UsersPage)
