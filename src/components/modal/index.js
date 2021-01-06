import React, {useEffect} from 'react';
import './style.less';
import { Button, IconButton } from "../index";

export const Modal = (props) => {
    const {
        title = '',
        actionTitle = '',
        children = null,
        closeModal = () => console.log('closeModal'),
        modalAction = () => console.log('modalAction')
    } = props;

    useEffect(() => {
        document.onkeydown = function (evt) {
            if (evt.keyCode === 27) {
                // Escape key pressed
                closeModal();
            }
        };
    }, [])

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="header-modal">
                    {title}
                    <IconButton name="close" onClick={closeModal} fill="#f44336" />
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