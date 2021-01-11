import React, { useEffect, useRef } from 'react';
import { actionTypes as types } from '../../constants';
import { connect } from 'react-redux';
import { HeaderPage, IconButton, Pagination, Table } from "../../components";
import { useUpdateStore } from "../../hooks";
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

    const handleChangeName = (e) => {
        updateStore({
            name: e.target.value,
        })
    }
    const handleChangeLocation = (e) => {
        updateStore({
            location: e.target.value,
        })
    }
    const handleChangeAge = (e) => {
        updateStore({
            age: e.target.value,
        })
    }

    const handleSearch = (e) => {
        updateStore({
            search: e.target.value,
        })
    }

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

    const handleOpenAdding = () => {
        const payload = {
            isOpenModalAdd: !isOpenModalAdd,
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
            accessor: (row) => <IconButton name="edit" fill="#f0f8ff" onClick={() => handleOpenEdition(row)} />,
        },
        {
            id: 'id-delete',
            Header: '',
            accessor: (row) => <IconButton name="delete" fill="#f0f8ff" onClick={() => handleDeleteRow(row)} />,
        }
    ]

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

    return (
        <div className="contentGrid users-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
            <ConfigControl
                handleSearch={handleSearch}
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
            <span className="scrollBox">
                {!isEmpty(users) ? <Table columns={columns} data={users} searchResult={searchResult} /> : null}
            </span>
            <ModalAdd
                isOpenModalAdd={isOpenModalAdd}
                handleChangeName={handleChangeName}
                handleChangeLocation={handleChangeLocation}
                handleChangeAge={handleChangeAge}
                handleAddUser={handleAddUser}
                handleCloseModal={handleCloseModal}
            />
            <ModalEdit
                isOpenModalEdit={isOpenModalEdit}
                currentUser={currentUser}
                handleCloseModal={handleCloseModal}
                handleEditUser={handleEditUser}
                handleChangeName={handleChangeName}
                handleChangeLocation={handleChangeLocation}
                handleChangeAge={handleChangeAge}
            />
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    }
})(UsersPage)
