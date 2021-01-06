import React from 'react';
import './style.less';
import {Button} from "../index";

export const Modal = (props) => {
    const {
        title = '',
        actionTitle = '',
        children = null,
        closeModal = () => console.log('closeModal'),
        modalAction = () => console.log('modalAction')
    } = props;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="header-modal">
                    {title}
                </div>
                <div className="content-modal">
                    {children}
                </div>
                <div className="footer-modal">
                    <Button type='contained' title={actionTitle} size="small" onClick={modalAction} />
                    <Button type='contained' title="Close modal" size="small" onClick={closeModal} />
                </div>
            </div>
        </div>
    )
}