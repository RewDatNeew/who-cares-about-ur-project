import React, { useEffect } from 'react';
import { actionTypes as types } from '../../constants';
import { connect } from 'react-redux';
import {IconButton, Input, Modal, Table} from "../../components";
import { useUpdateStore } from "../../hooks";
import { isEmpty } from "../../helpers";
import { getUsers, addUser, deleteUser, editUser } from "./duck/action";
import { ConfigControl } from "./components/config-control";
import './style.less';

const UsersPage = (props) => {
    const updateStore = useUpdateStore({ type: types.USERS_UPDATE })

    const {
        users = [],
        id,
        name = '',
        location = '',
        age = 0,
        isOpenModal = false,
        currentUser = {},
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
        id,
    }

    const handleAddUser = async () => {
        await props.dispatch(addUser(user));
        handleGetUsers()
    }

    const handleDeleteRow = async (row) => {
        const {
            id,
        } = row;
        await props.dispatch(deleteUser(id));
        handleGetUsers()
    }

    const handleToggleModal = (row) => {
        const payload = {
            isOpenModal: !isOpenModal,
            currentUser: {
                id: row.id,
                name: row.name,
                location: row.location,
                age: row.age,
            }
        }
        updateStore(payload);
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
            id: 'id-edit',
            Header: '',
            accessor: (row) => <IconButton name="edit" fill="#f0f8ff" onClick={() => handleToggleModal(row)} />,
        },
        {
            id: 'id-delete',
            Header: '',
            accessor: (row) => <IconButton name="delete" fill="#f0f8ff" onClick={() => handleDeleteRow(row)} />,
        }
    ]

    const handleCloseModal = () => {
        updateStore({
            isOpenModal: false,
        })
    }

    const handleEditUser = async () => {
        const editedUser = {
            id: currentUser.id,
            name: name || currentUser.name,
            location: location || currentUser.location,
            age: age || currentUser.age,
        }
        await props.dispatch(editUser(editedUser));
        await handleCloseModal();
        handleGetUsers()
    }


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
            {isOpenModal
                ? <Modal
                    title="Edit User"
                    actionTitle="Edit user"
                    modalAction={handleEditUser}
                    closeModal={handleCloseModal}
                >
                    <div className="input-zone">
                        <Input
                            currentValue={currentUser.name}
                            style="secondary"
                            label='name'
                            type="search"
                            onChange={handleChangeName}
                        />
                        <Input
                            currentValue={currentUser.location}
                            style="secondary"
                            label='location'
                            type="search"
                            onChange={handleChangeLocation}
                        />
                        <Input
                            currentValue={currentUser.age}
                            style="secondary"
                            label='age'
                            type='number'
                            onChange={handleChangeAge}
                        />
                    </div>
                  </Modal>
                : null}
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    }
})(UsersPage)
