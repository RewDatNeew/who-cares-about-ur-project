import React from 'react';
import { Button, Config } from "../../../../components";
import './style.less';

export const ConfigControl = (props) => {
    const {
        searchInput = {},
        handleOpenAdding = () => console.log('handleOpenAdding'),
    } = props;

    return (
        <Config headerTitle='Config' iconName="settings">
            <div className="config">
                {searchInput}
                <div>
                    <Button title="Add User" onClick={handleOpenAdding} />
                </div>
            </div>
        </Config>

    )
}