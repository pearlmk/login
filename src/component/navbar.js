import React from "react";

const Navbar = () =>{
    return(
        <>
        <nav className="ui raised very padded segment">
        <a  className="ui teal invrted degment">image search engine</a>
        <div className="ui right floated header">
          <button className="ui button"><a href="/home"/>home</button>
          <button className="ui button"><a href="/about"/>about us</button>
          <button className="ui button"><a href="/contect"/>contect</button>
        </div>
        </nav>
        </>
      
    )
}


export default Navbar;