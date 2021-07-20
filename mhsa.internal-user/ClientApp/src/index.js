import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Route from './routes/routes';
import { ThemeProvider } from '@material-ui/core';
import createMainTheme from './config/mainTheme';

const container = document.getElementById("root");

const theme = createMainTheme();

ReactDOM.render(
<div className="mainContainer">
    <ThemeProvider theme={theme}>
        <Route/>
    </ThemeProvider>
</div>
,container);