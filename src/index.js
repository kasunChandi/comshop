import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Desktops from './components/Desktops';
import Laptops from './components/Laptops';
import ViewDetails from './components/viewDetails';

ReactDOM.render(
 <BrowserRouter>
 <Navbar/>
 <Route exact path="/" component={Home}/>
 <Route exact path="/api/desktopPC" component={Desktops}/>
 <Route exact path ="/api/laptopPc" component ={Laptops}/>
 <Route exact path ="/viewDetails/:id" component={ViewDetails}/>
 <Footer/>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

