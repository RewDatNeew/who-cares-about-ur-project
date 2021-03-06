import React from 'react';
import { Modal } from "../../../../components";

export const SignInModal = (props) => {
    const {
        isOpenSignInModal = false,
        handleSignIn = () => console.log('handleSignIn'),
        handleCloseModal = () => console.log('handleCloseModal'),
        nameSignInInput = () => console.log('nameSignInInput'),
        emailSignInInput = () => console.log('emailSignInInput'),
        passwordSignInInput = () => console.log('passwordSignInInput')
    } = props;

    return (
        <div>
            {isOpenSignInModal
                ? <Modal
                    title="Регистрация"
                    width="400px"
                    actionTitle="Зарегистрироваться"
                    modalAction={handleSignIn}
                    closeModal={handleCloseModal}
                >
                    <div className="modal-input-zone">
                        {nameSignInInput}
                        {emailSignInInput}
                        {passwordSignInInput}
                    </div>
                </Modal>
                : null
            }
        </div>
    )
}