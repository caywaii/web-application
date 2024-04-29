import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product"


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element = {<Login/>}/>
   <Route exact path="signup" element = {<Signup/>}/>
   <Route exact path="/home" element = {<Home/>}/>
   <Route path="/product" element = {<Product/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
