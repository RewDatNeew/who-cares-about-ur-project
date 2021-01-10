import React from 'react';
import { Input, Modal } from "../../../../components";

export const SignInModal = (props) => {
    const {
        isOpenSignInModal = false,
        handleSignIn = () => console.log('handleSignIn'),
        handleCloseModal = () => console.log('handleCloseModal'),
        handleChangeName = () => console.log('handleChangeName'),
        handleChangeLogin = () => console.log('handleChangeLogin'),
        handleChangePassword = () => console.log('handleChangePassword')
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
                        <Input
                            label='name'
                            onChange={handleChangeName}
                        />
                        <Input
                            label='login'
                            onChange={handleChangeLogin}
                        />
                        <Input
                            type="password"
                            label='password'
                            onChange={handleChangePassword}
                        />
                    </div>
                </Modal>
                : null
            }
        </div>
    )
}