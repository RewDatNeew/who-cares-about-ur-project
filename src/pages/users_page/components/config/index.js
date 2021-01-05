import React from 'react';
import { Button, Input } from "../../../../components";
import './style.less';

export const Config = (props) => {
    const {
        handleChangeName = () => console.log('handleChangeName'),
        handleChangeLocation = () => console.log('handleChangeLocation'),
        handleChangeAge = () => console.log('handleChangeAge'),
        handleAddUser = () => console.log('handleAddUser'),
    } = props;

    return (
        <div className="config">
            <Input label='name' type="search" onChange={handleChangeName}/>
            <Input label='location' type="search" onChange={handleChangeLocation}/>
            <Input label='age' type='number' onChange={handleChangeAge}/>
            <span className="btn"><Button type='contained' title="Add User" size="small" onClick={handleAddUser} /></span>
        </div>
    )
}