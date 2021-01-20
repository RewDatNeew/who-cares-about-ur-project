import React, { useEffect, useRef } from 'react';
import { actionTypes as types } from '../../constants';
import { connect } from 'react-redux';
import { HeaderPage, IconButton, Pagination, Table } from "../../components";
import {useInput, useUpdateStore} from "../../hooks";
import { isEmpty } from "../../helpers";
import { getUsers, addUser, deleteUser, editUser, searchUser, getLimitedUsers } from "./duck/action";
import { ConfigControl } from "./components/config-control";
import { ModalAdd, ModalEdit } from "./components/modals";
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
        search = '',
        searchResult = [],
        page = 0,
        totalElements = 0,
        size = 0,
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

    const handleSendPageParams = () => {
        const {
            page,
            size,
        } = usersRef.current;
        props.dispatch(getLimitedUsers({ page, size }));
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

    const searchInput = useInput({
        updateStore,
        name: 'search',
        label: 'search',
    })

    const handleSendSearch = async () => {
        await props.dispatch(searchUser(search));
    }

    const user = {
        name,
        location,
        age,
        id,
    }

    const handleAddUser = async () => {
        await props.dispatch(addUser(user));
        handleGetUsers();
        handleCloseModal();
    }

    const handleDeleteRow = async (row) => {
        const {
            id,
        } = row;
        await props.dispatch(deleteUser(id));
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

    const changePageNumber = async (page) => {
        await updateStore({
            page: page - 1,
        })
        handleSendPageParams()
    }

    const changeValuePerPage = async (value) => {
        await updateStore({
            page,
            size: value,
        })
        handleSendPageParams();
    }

    const customTd = (row) => {
        if (row !== null) {
            return (
                <>
                    <td>
                        <IconButton name="edit" fill="#f0f8ff" onClick={() => handleOpenEdition(row)} />
                    </td>
                    <td>
                        <IconButton name="delete" fill="#f0f8ff" onClick={() => handleDeleteRow(row)} />
                    </td>
                </>
            );
        }
    };

    const addThs = [<th key={'1'} />, <th key={'2'} />]

    return (
        <div className="users-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
            <ConfigControl
                searchInput={searchInput}
                handleOpenAdding={handleOpenAdding}
                handleSendSearch={handleSendSearch}
            />
            <Pagination
                page={page}
                size={size}
                totalElements={totalElements}
                updateStore={updateStore}
                changePageNumber={changePageNumber}
                changeValuePerPage={changeValuePerPage}
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
