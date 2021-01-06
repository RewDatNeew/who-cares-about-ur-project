import React from 'react';
import { Input, Modal } from "../../../../../components";

export const ModalAdd = (props) => {
    const {
        isOpenModalAdd = false,
        handleChangeName = () => console.log('handleChangeName'),
        handleChangeLocation = () => console.log('handleChangeLocation'),
        handleChangeAge = () => console.log('handleChangeAge'),
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
                        <Input style="secondary" label='name' onChange={handleChangeName}/>
                        <Input style="secondary" label='location' onChange={handleChangeLocation}/>
                        <Input style="secondary" label='age' type='number' onChange={handleChangeAge}/>
                    </div>
                </Modal>
            : null}
        </>
    )
}