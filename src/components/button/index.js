import React from 'react';
import Button from '@material-ui/core/Button';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
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

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#f0f8ff'
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}
