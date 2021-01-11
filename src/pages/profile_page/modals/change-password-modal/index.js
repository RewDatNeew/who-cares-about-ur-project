import React from 'react';
import { Modal } from "../../../../components";

export const ChangePasswordModal = (props) => {
    const {
        isOpenPasswordModal = false,
        handleCloseModal = () => console.log('handleCloseModal'),
        handleChangePassword = () => console.log('handleChangePassword'),
        newPasswordInput = () => console.log('newPasswordInput'),
        currentPasswordInput = () => console.log('currentPasswordInput'),
    } = props;
    return (
        <>
            {
                isOpenPasswordModal
                ? <Modal
                    title="Change Password"
                    actionTitle="Change Password"
                    modalAction={handleChangePassword}
                    closeModal={handleCloseModal}>
                    <div className="modal-input-zone">
                        {currentPasswordInput}
                        {newPasswordInput}
                    </div>
                  </Modal>
                : null
             }
        </>
    )
}