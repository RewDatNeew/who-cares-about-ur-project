import React from 'react';
import { Modal } from "../../../../components";

export const ChangePasswordModal = (props) => {
    const {
        isOpenPasswordModal = false,
        handleCloseModal = () => console.log('handleCloseModal'),
        handleChangePassword = () => console.log('handleChangePassword'),
        newPasswordInput = () => console.log('newPasswordInput'),
    } = props;
    return (
        <>
            {
                isOpenPasswordModal
                ? <Modal
                    width="400px"
                    title="Change Password"
                    actionTitle="Change Password"
                    modalAction={handleChangePassword}
                    closeModal={handleCloseModal}>
                    <div className="modal-input-zone">
                        {newPasswordInput}
                    </div>
                  </Modal>
                : null
             }
        </>
    )
}