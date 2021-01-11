import React from 'react';
import { Modal } from "../../../../../components";

export const ModalEdit = (props) => {
    const {
        isOpenModalEdit = false,
        handleEditUser = () => console.log('handleEditUser'),
        handleCloseModal = () => console.log('handleCloseModal'),
        editNameInput = () => console.log('editNameInput'),
        editLocationInput = () => console.log('editLocationInput'),
        editAgeInput = () => console.log('editAgeInput'),
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
                    {editNameInput}
                    {editLocationInput}
                    {editAgeInput}
                </div>
            </Modal>
            : null}
            </>
    )
}