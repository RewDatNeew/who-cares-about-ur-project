import React from 'react';
import { Button, Config } from "../../../../components";
import './style.less';

export const ConfigControl = (props) => {
    const {
        searchInput = {},
        handleOpenAdding = () => console.log('handleOpenAdding'),
    } = props;

    return (
        <Config headerTitle='Конфигуратор' iconName="settings">
            <div className="config">
                <div className="input-zone">{searchInput}</div>
                <div className="button-zone">
                    <Button title="Создать пользователя" onClick={handleOpenAdding} />
                </div>
            </div>
        </Config>

    )
}