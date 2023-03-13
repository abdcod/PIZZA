import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
// import './App.css';

import "./scss/app.scss"
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes, NavLink} from "react-router-dom";
import Cart from "./pages/Cart";

// import pizzas from "./assets/pizzas.json"
// import {json} from "stream/consumers";

//https://63e911c4b120461c6bea8c81.mockapi.io/items

// let pizzas : Object[] = [];

function App() {



    // pizzas = items;

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>

{/*<Home></Home>*/}
{/*                    <NotFound />*/}
            </div>
        </div>
    );
}

export default App;
