import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Home } from "./Components/Home";


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element = {<Login/>}/>
   <Route exact path="signup" element = {<Signup/>}/>
   <Route exact path="home" element = {<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
