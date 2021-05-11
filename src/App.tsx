import React from 'react';
import './Assets/css/App.css';
import GrabitRouter from "./Router/Router";
import {MuiThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import Yellow from "@material-ui/core/colors/yellow";
import Grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: Yellow[700],
            contrastText: Grey[50],
        }
    }
});

export default function App() {
  return(
      <MuiThemeProvider theme={theme}>
          <div className="App">
              <GrabitRouter/>
          </div>
      </MuiThemeProvider>
  );
}