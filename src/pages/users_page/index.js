import React, { useEffect } from 'react';
import { actionTypes as types } from '../../constants';
import { connect } from 'react-redux';
import { IconButton, Table } from "../../components";
import { useUpdateStore } from "../../hooks";
import { isEmpty } from "../../helpers";
import { getUsers, addUser, deleteUser } from "./duck/action";
import { ConfigControl } from "./components/config-control";
import './style.less';

const UsersPage = (props) => {
    const updateStore = useUpdateStore({ type: types.USERS_UPDATE })

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

    const handleDeleteRow = async (row) => {
        const {
            id,
        } = row;
        await props.dispatch(deleteUser(id));
        props.dispatch(getUsers());
    }

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
        },
        {
            id: 'id',
            Header: '',
            accessor: (row) => <IconButton fill="#f0f8ff" onClick={() => handleDeleteRow(row)} />,
        }
    ]

    return (
        <div className="contentGrid users-page">
            <ConfigControl
                handleChangeName={handleChangeName}
                handleChangeLocation={handleChangeLocation}
                handleChangeAge={handleChangeAge}
                handleAddUser={handleAddUser}
            />
            <span className="scrollBox">
                {!isEmpty(users) ? <Table columns={columns} data={users} /> : null}
            </span>
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    }
})(UsersPage)
