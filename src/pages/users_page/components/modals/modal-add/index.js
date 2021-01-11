import React from 'react';
import { Modal } from "../../../../../components";

export const ModalAdd = (props) => {
    const {
        isOpenModalAdd = false,
        nameInput = () => console.log('nameInput'),
        locationInput = () => console.log('locationInput'),
        ageInput = () => console.log('ageInput'),
        handleAddUser = () => console.log('handleAddUser'),
        handleCloseModal = () => console.log('handleCloseModal'),
    } = props;
    return (
        <>
            {isOpenModalAdd
                ? <Modal
                    title="Add User"
                    actionTitle="Add user"
                    modalAction={handleAddUser}
                    closeModal={handleCloseModal}
                >
                    <div className="input-zone">
                        {nameInput}
                        {locationInput}
                        {ageInput}
                    </div>
                </Modal>
            : null}
        </>
    )
}