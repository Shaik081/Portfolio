import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import TailwindCss from "./folder/TailwindCss";
import Contact from "./folder/Contact";
import About from "./folder/About";
import Home from "./folder/Home";
import Skills from "./folder/Skills";
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


function App() {

  const [dark,setDark] = useState(false)
  

  function ToggleDark(){

    setDark(!dark)
  }

  return (
    
    <div>
    <BrowserRouter>
    <div className={dark && "dark"}>
    <TailwindCss/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/Contact" element={<Contact/>} ></Route>
      <Route path="/About" element={<About/>} ></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
    </Routes>
    <button className="fixed right-10 bottom-10 font-bold font-mono rounded-full shadow-md shadow-black dark:shadow-white bg-black text-white p-3 dark:bg-white dark:text-black" onClick={ToggleDark}>{dark? "LHT":"DRK"}</button> 
    </div>
    </BrowserRouter> 
    </div>
    
  );
}

export default App;
