import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import './style.less';

export const Input = (props) => {
    const {
        label = '',
        type = '',
        onChange = () => console.log('onChange'),
    } = props;

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#f0f8ff'
            }
        },
    });

    return (
        <div className="input-form">
            <ThemeProvider theme={theme}>
                <TextField
                    id="standard-search"
                    className="input"
                    label={label}
                    type={type ? type : ''}
                    onChange={onChange}
                />
            </ThemeProvider>
        </div>
    )
}