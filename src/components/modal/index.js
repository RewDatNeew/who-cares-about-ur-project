import React, {useEffect} from 'react';
import './style.less';
import { Button, IconButton } from "../index";

export const Modal = (props) => {
    const {
        title = '',
        actionTitle = '',
        children = null,
        closeModal = () => console.log('closeModal'),
        modalAction = () => console.log('modalAction'),
        width = '800px'
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
            <div className="modal" style={{ width: width }}>
                <div className="header-modal">
                    {title}
                    <IconButton name="close" onClick={closeModal} fill="#f44336" />
                </div>
                <div className="content-modal">
                    {children}
                </div>
                <div className="footer-modal">
                    <Button title={actionTitle} style="secondary" onClick={modalAction} />
                    <Button title="Close modal" style="secondary" onClick={closeModal} />
                </div>
            </div>
        </div>
    )
}