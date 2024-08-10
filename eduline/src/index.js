import React from "react";
import App from "./App";
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";


const root = createRoot(document.getElementById('root'))
root.render(<Router>
    <Provider store={Appstore}>
    <App />
    </Provider>
    </Router>)