import React from 'react';
import { Button, Config } from "../../../../components";
import './style.less';

export const ConfigControl = (props) => {
    const {
        handleOpenAdding = () => console.log('handleOpenAdding'),
        handleSendSearch = () => console.log('handleSendSearch'),
        searchInput = () => console.log('searchInput'),
    } = props;

    return (
        <Config headerTitle='Config' iconName="settings">
            <div className="config">
                {searchInput}
                <div>
                    <Button title="Search" onClick={handleSendSearch} />
                    <Button title="Add User" onClick={handleOpenAdding} />
                </div>
            </div>
        </Config>

    )
}