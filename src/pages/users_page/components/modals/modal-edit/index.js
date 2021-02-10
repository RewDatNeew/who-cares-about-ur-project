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
                title="Изменить пользователя"
                width="400px"
                actionTitle="Изменить"
                modalAction={handleEditUser}
                closeModal={handleCloseModal}
            >
                <div className="modal-input-zone">
                    {editNameInput}
                    {editLocationInput}
                    {editAgeInput}
                </div>
            </Modal>
            : null}
            </>
    )
}