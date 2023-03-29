import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/App";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact Component={Login}/>
                <Route path="/" exact Component={Home}/>
                <Route path="/register" exact Component={Registro}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Rotas