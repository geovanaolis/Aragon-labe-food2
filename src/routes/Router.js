import React, { Profiler } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { InitialPage } from "../pages/InitialPage";
import { ErrorPage } from "../pages/ErrorPage";
import { RestaurantDetails } from "../pages/RestaurantDetails";
import { Cart } from "../pages/Cart";
import { Address } from "../pages/Address";
import { Feed } from "../pages/Feed";
import { Profile } from "../pages/Profile";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/login"}element={<Login/>}/>
                <Route path={"/restaurants"} element={<Feed/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/address"} element={<Address/>}/>
                <Route index element={<InitialPage/>}/>
                <Route path={"/restaurants/:restaurantId"} element={<RestaurantDetails/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/active-order"} element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}