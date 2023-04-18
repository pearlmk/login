import React from "react";
import Search from "./search";
import Navbar from "./navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contect from "./contect";

const App = () => {

  return (
    

    <div><BrowserRouter>
     <Navbar />
     <Routes>
     <Route path='/home' Component={<Home />}/>
     <Route path='/about' Component={<About />}/>
     <Route path='/contect' Component={<Contect />}/>
     </Routes>
     </BrowserRouter>
    <div className="ui container" style={{ marginTop: "30px", color: "red" }}>
      <Search />
    </div>
    </div>
  )
  
}

export default App;
