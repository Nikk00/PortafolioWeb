import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './pages/Error';
import About from "./pages/About";

import App from "./App";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<App />}/>
                    <Route  path="/about" element={<About />}/>
                    <Route  path="/projects" element={<Projects />}/>

                    <Route path="/*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
