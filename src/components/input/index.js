import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import './style.less';

// style: primary, secondary

export const Input = (props) => {
    const {
        label = '',
        type = '',
        style = '',
        onChange = () => console.log('onChange'),
        currentValue = '',
    } = props;

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#f0f8ff'
            },
            secondary: {
                main: '#939597'
            }
        },
    });

    return (
        <div className="input-form">
            <ThemeProvider theme={theme}>
                <TextField
                    defaultValue={currentValue}
                    id="standard-search"
                    className="input"
                    label={label}
                    color={style}
                    type={type ? type : ''}
                    onChange={onChange}
                />
            </ThemeProvider>
        </div>
    )
}