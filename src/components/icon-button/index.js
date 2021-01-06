import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from "../icon";

export const IconButtonComponent = (props) => {
    const {
        onClick = () => console.log('onClick'),
        fill = '#0000008a',
        size = 18,
    } = props;
    return (
            <IconButton onClick={onClick}>
               <Icon name="delete" fill={fill} size={size} />
            </IconButton>
    );
}