import React from 'react';
import './Assets/css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import GrabitRouter from "./Router/Router";
import {MuiThemeProvider} from "@material-ui/core";
import {ToastContainer} from "react-toastify";
import {grabitTheme} from "./Theme/Theme";


export default function App() {
  return(
      <MuiThemeProvider theme={grabitTheme}>
          <div className="App">
              <ToastContainer/>
              <GrabitRouter/>
          </div>
      </MuiThemeProvider>
  );
}