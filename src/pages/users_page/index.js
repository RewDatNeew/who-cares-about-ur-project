import React, {useEffect, useRef} from 'react';
import { actionTypes as types } from '../../constants';
import { connect } from 'react-redux';
import {HeaderPage, IconButton, Pagination, Table, Tooltip} from "../../components";
import {useInput, useNotification, useUpdateStore} from "../../hooks";
import { isEmpty } from "../../helpers";
import { getUsers, addUser, deleteUser, editUser } from "./duck/action";
import { ConfigControl } from "./components/config-control";
import { ModalAdd, ModalEdit } from "./components/modals";
import { useSearch } from './hooks';
import './style.less';

const UsersPage = (props) => {
    const {
        users = [],
        id,
        name = '',
        location = '',
        age = 0,
        isOpenModalEdit = false,
        isOpenModalAdd = false,
        currentUser = {},
        searchResult = [],
        cells = [],
    } = props.users;

    const updateStore = useUpdateStore({ type: types.USERS_UPDATE })

    const usersRef = useRef();
    useEffect(() => {
        usersRef.current = props.users;
    })

    const handleGetUsers = () => {
        props.dispatch(getUsers());
    }

    useEffect(() => {
        handleGetUsers();
    }, [])

    const handleCloseModal = () => {
        updateStore({
            isOpenModalEdit: false,
            isOpenModalAdd: false,
        })
    }

    const nameInput = useInput({
        updateStore,
        name: 'name',
        label: 'Name'
    })
    const locationInput = useInput({
        updateStore,
        name: 'location',
        label: 'location'
    })
    const ageInput = useInput({
        type: 'number',
        updateStore,
        name: 'age',
        label: 'age'
    })

    const user = {
        name,
        location,
        age,
        id,
    }

    const handleAddUser = async () => {
        await props.dispatch(addUser(user));
        handleGetUsers();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNotification({message: `Пользователь добавлен`, dispatch: props.dispatch })
        handleCloseModal();
    }

    const handleDeleteRow = async (row) => {
        const {
            id,
        } = row;
        await props.dispatch(deleteUser(id));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNotification({message: `Пользователь удален`, dispatch: props.dispatch })
        handleGetUsers()
    }

    const handleEditUser = async () => {
        const editedUser = {
            id: currentUser.id,
            name: name || currentUser.name,
            location: location || currentUser.location,
            age: age || currentUser.age,
        }
        await props.dispatch(editUser(editedUser));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNotification({message: `Пользователь изменен`, dispatch: props.dispatch})
        await handleCloseModal();
        handleGetUsers()
    }


    const handleOpenEdition = (row) => {
        const payload = {
            isOpenModalEdit: !isOpenModalEdit,
            currentUser: {
                id: row.id,
                name: row.name,
                location: row.location,
                age: row.age,
            }
        }
        updateStore(payload);
    }

    const editNameInput = useInput({
        currentValue: currentUser.name,
        updateStore,
        name: 'name',
        label: 'Name'
    })
    const editLocationInput = useInput({
        currentValue: currentUser.location,
        updateStore,
        name: 'location',
        label: 'location'
    })
    const editAgeInput = useInput({
        currentValue: currentUser.age,
        type: 'number',
        updateStore,
        name: 'age',
        label: 'age'
    })

    const handleOpenAdding = () => {
        const payload = {
            isOpenModalAdd: !isOpenModalAdd,
        }
        updateStore(payload);
    }

    const customTd = (row) => {
        if (row !== null) {
            return (
                <>
                    <td>
                        <Tooltip tooltipLabel="Изменить" position="left">
                            <IconButton name="edit" fill="#939597" onClick={() => handleOpenEdition(row)} />
                        </Tooltip>
                    </td>
                    <td>
                        <Tooltip tooltipLabel="Удалить" position="left">
                        <IconButton name="delete" fill="#939597" onClick={() => handleDeleteRow(row)} />
                        </Tooltip>
                    </td>
                </>
            );
        }
    };

    const searchInput = useSearch({ data: users, updateStore })

    const addThs = [<th key={'1'} />, <th key={'2'} />]

    return (
        <div className="users-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
            <ConfigControl
                searchInput={searchInput}
                handleOpenAdding={handleOpenAdding}
            />
            <Pagination
            />
            {!isEmpty(users) ? <Table
                cells={cells}
                data={users}
                searchResult={searchResult}
                addThs={addThs}
                customTd={customTd}
            /> : null}
            <ModalAdd
                isOpenModalAdd={isOpenModalAdd}
                nameInput={nameInput}
                locationInput={locationInput}
                ageInput={ageInput}
                handleAddUser={handleAddUser}
                handleCloseModal={handleCloseModal}
            />
            <ModalEdit
                isOpenModalEdit={isOpenModalEdit}
                currentUser={currentUser}
                handleCloseModal={handleCloseModal}
                handleEditUser={handleEditUser}
                editNameInput={editNameInput}
                editLocationInput={editLocationInput}
                editAgeInput={editAgeInput}
            />
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    }
})(UsersPage)
