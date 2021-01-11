import React from 'react';
import {Input, Modal} from "../../../../components";

export const ChangePasswordModal = (props) => {
    const {
        isOpenPasswordModal = false,
        handleCloseModal = () => console.log('handleCloseModal'),
        handleChangePassword = () => console.log('handleChangePassword'),
        handleEnterNewPassword = () => console.log('handleEnterNewPassword'),
        handleEnterCurrentPassword = () => console.log('handleEnterCurrentPassword'),
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
                        <Input
                            type="password"
                            label='current password'
                            onChange={handleEnterCurrentPassword}
                        />
                        <Input
                            type="password"
                            label='new password'
                            onChange={handleEnterNewPassword}
                        />
                    </div>
                  </Modal>
                : null
             }
        </>
    )
}