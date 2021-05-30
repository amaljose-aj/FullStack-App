import React from "react";
import "bootstrap/js/src/collapse.js";
import {Link} from "react-router-dom"; 
function Navbar(){
return <nav classNAme = "navbar bg-dark container">
    <h1><Link to="/">List</Link></h1>
    <h1><Link to="/add">Add Customer</Link></h1>
    <h1><Link to="/edit">Edit Customer</Link></h1>
    
</nav>
}
export default Navbar;