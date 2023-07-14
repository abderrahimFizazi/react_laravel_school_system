import React from "react";
import { Outlet } from "react-router-dom";
import NavbarFront from "./Navbar";
import "../../assets/frontend/word/css/styles.css"
import Footer from "./Footer";


const MasterLayout = () => {
return(
    <>
    <NavbarFront/>
    <Outlet/>
    <Footer/>
    </>
)
}
export default MasterLayout