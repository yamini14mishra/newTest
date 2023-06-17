import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import NavBar from "./NavBar";
import './App.css';

const App= () => {
  const Name = () => {
    return <h1>Hello, I am a Name Page</h1>
  }
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/about' element={<About/>}/> 
      <Route exact path='/contact' element={<Contact/>}/> 
      <Route path='/contact/Name' element={<Name/>}/> 
      <Route path='/' element={<Error/>}/> 
    </Routes>
     {/* npm install react-router-dom */}
    </>
  )
}
export default App;