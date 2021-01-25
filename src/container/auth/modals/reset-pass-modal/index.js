import React from 'react';
import { Modal } from "../../../../components";

export const ResetPassModal = (props) => {
    const {
        isOpenResetPasswordModal = false,
        handleCloseModal = () => console.log('handleCloseModal'),
        emailSignInInput = () => console.log('emailSignInInput'),
        handleChangePassword = () => console.log('handleChangePassword'),
    } = props;

    return (
        <div>
            {isOpenResetPasswordModal
                ? <Modal
                    title="Восстановление пароля"
                    width="400px"
                    actionTitle="Отправить"
                    modalAction={handleChangePassword}
                    closeModal={handleCloseModal}
                >
                    <div className="modal-input-zone">
                        {emailSignInInput}
                    </div>
                </Modal>
                : null
            }
        </div>
    )
}