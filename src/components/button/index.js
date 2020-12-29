import React from 'react';
import { Button, Tooltip } from 'antd';

// types: primary, dashed, text, link

export const ButtonComponent = ({
    type = 'primary', tooltip = '', icon = {}, title = ''
}) => {
    console.log({title})
    return (
        <Tooltip title={tooltip ? tooltip : null}>
            <Button type={type} icon={icon ? icon : null}>
                {title}
            </Button>
        </Tooltip>
    )
}
