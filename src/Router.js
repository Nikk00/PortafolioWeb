import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Error from './components/Error';
import About from "./components/About";
class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>

                    <Route component={Error}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;