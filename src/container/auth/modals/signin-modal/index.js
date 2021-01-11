import React from 'react';
import { Modal } from "../../../../components";

export const SignInModal = (props) => {
    const {
        isOpenSignInModal = false,
        handleSignIn = () => console.log('handleSignIn'),
        handleCloseModal = () => console.log('handleCloseModal'),
        nameSignInInput = () => console.log('nameSignInInput'),
        loginSignInInput = () => console.log('loginSignInInput'),
        passwordSignInInput = () => console.log('passwordSignInInput')
    } = props;

    return (
        <div>
            {isOpenSignInModal
                ? <Modal
                    title="Sign In"
                    actionTitle="Sign In"
                    modalAction={handleSignIn}
                    closeModal={handleCloseModal}
                >
                    <div className="modal-input-zone">
                        {nameSignInInput}
                        {loginSignInInput}
                        {passwordSignInInput}
                    </div>
                </Modal>
                : null
            }
        </div>
    )
}