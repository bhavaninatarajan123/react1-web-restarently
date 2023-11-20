import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import About from './About.js';
import Banner from './Banner.js'
import Card from './Card.js';
import Menu from './Menu.js';
import Special from './Specials.js'
import Reservation from './Reservation.js';
import Gallery from './Gallery.js';
import Chefs from './Chefs.js';
import Contactus from './Contactus.js'
import Footer from './Footer.js'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Banner/>
    <About/>
    <Card/>
    <Menu/>
    <Special/>
    <Reservation/>
    <Gallery/>
    <Chefs/>
    <Contactus/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
