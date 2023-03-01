import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import {Accessories} from '../pages/Accessories'
import {Blog} from '../pages/Blog'
import {Clothes} from '../pages/Clothes'
import {Contact} from '../pages/Contact'
import {Footwear} from '../pages/Footwear'
import {Login} from '../pages/Login'
import {Seeting} from '../pages/Seeting'
import {ShoppingCart} from '../pages/ShoppingCart'
import {SmartPhone} from '../pages/SmartPhone'


export function RoutesApp(){
    return(
        <Routes>
        <Route index element={<Home/>} exact />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Accessories" element={<Accessories/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Clothes" element={<Clothes/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Footwear" element={<Footwear/>} />
        <Route path="/SmartPhone" element={<SmartPhone/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>} />
        <Route path="/Seeting" element={<Seeting/>} />
        <Route path="*" element={<h1>Error!!! Pagina No Encontrada</h1>}/>
      </Routes>
    )
}