import React from 'react';
import { Button, Input, Config } from "../../../../components";
import './style.less';

export const ConfigControl = (props) => {
    const {
        handleChangeName = () => console.log('handleChangeName'),
        handleChangeLocation = () => console.log('handleChangeLocation'),
        handleChangeAge = () => console.log('handleChangeAge'),
        handleAddUser = () => console.log('handleAddUser'),
    } = props;

    return (
        <Config headerTitle='Config' iconName="settings">
            <div className="config">
                <div className="input-zone">
                    <Input label='name' type="search" onChange={handleChangeName}/>
                    <Input label='location' type="search" onChange={handleChangeLocation}/>
                    <Input label='age' type='number' onChange={handleChangeAge}/>
                </div>
                <Button type='contained' title="Add User" size="small" onClick={handleAddUser} />
            </div>
        </Config>

    )
}