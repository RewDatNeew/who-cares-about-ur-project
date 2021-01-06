import React from 'react';
import { Button, Config, Input } from "../../../../components";
import './style.less';

export const ConfigControl = (props) => {
    const {
        handleOpenAdding = () => console.log('handleOpenAdding'),
        handleSendSearch = () => console.log('handleSendSearch'),
        handleSearch = () => console.log('handleSearch'),
    } = props;

    return (
        <Config headerTitle='Config' iconName="settings">
            <div className="config">
                <Input style="primary" label='search' onChange={handleSearch}/>
                <div>
                    <Button type='contained' title="Search" size="small" onClick={handleSendSearch} />
                    <Button type='contained' title="Add User" size="small" onClick={handleOpenAdding} />
                </div>
            </div>
        </Config>

    )
}