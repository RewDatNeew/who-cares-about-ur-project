import React from 'react';
import { Input, Modal } from "../../../../../components";

export const ModalEdit = (props) => {
    const {
        isOpenModalEdit = false,
        currentUser = {},
        handleEditUser = () => console.log('handleEditUser'),
        handleCloseModal = () => console.log('handleCloseModal'),
        handleChangeName = () => console.log('handleChangeName'),
        handleChangeLocation = () => console.log('handleChangeLocation'),
        handleChangeAge = () => console.log('handleChangeAge'),
    } = props;
    return (
        <>
        {isOpenModalEdit
            ? <Modal
                title="Edit User"
                actionTitle="Edit user"
                modalAction={handleEditUser}
                closeModal={handleCloseModal}
            >
                <div className="input-zone">
                    <Input
                        currentValue={currentUser.name}
                        label='name'
                        onChange={handleChangeName}
                    />
                    <Input
                        currentValue={currentUser.location}
                        label='location'
                        onChange={handleChangeLocation}
                    />
                    <Input
                        currentValue={currentUser.age}
                        label='age'
                        type='number'
                        onChange={handleChangeAge}
                    />
                </div>
            </Modal>
            : null}
            </>
    )
}