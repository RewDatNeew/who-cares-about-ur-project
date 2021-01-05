import React from 'react';
import Button from '@material-ui/core/Button';
import './style.less';

// styles: default, primary, secondary, disabled
// type: text, outlined, contained

export const ButtonComponent = (props) => {
    const {
        style = 'primary',
        type = 'contained',
        title = '',
        disabled = false,
        size = 'small',
        icon = '',
        onClick = () => console.log('onClick')
    } = props;

    return (
        <Button
            variant={type}
            color={style}
            size={size}
            disabled={disabled}
            startIcon={icon ? icon : ''}
            onClick={onClick}
            className="btn"
        >
            {title}
        </Button>
    )
}
