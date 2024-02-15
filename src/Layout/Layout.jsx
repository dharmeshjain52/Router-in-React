import React from "react";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}