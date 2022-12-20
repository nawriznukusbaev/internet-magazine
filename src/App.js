import './App.css';
import React from 'react';
import {HeaderTop} from "./components/header/header-top";
import {HeaderMenu} from "./components/header/header-menu";
import {HeaderBanner} from "./components/header/header-banner";
import {NewProducts} from "./components/main/new-products";
import {Footer} from "./components/footer/footer";

<HeaderTop/>
const App = () => {
    return (<>
    <HeaderTop/>
   <HeaderMenu/>
            <HeaderBanner/>
            <NewProducts/>
            <NewProducts/>
            <NewProducts/>
            <Footer/>
        </>
    );
};

export default  App
