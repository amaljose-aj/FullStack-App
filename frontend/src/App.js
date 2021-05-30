import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/add";
import Edit from "./components/edit";
import List from "./components/list";

function App() {
  return (
    
      <Router>
      <Navbar />

      <Route path="/" exact>
        <List />
      </Route>

      <Route path="/add">
        <Add />
      </Route>

      <Route path="/edit">
        <Edit />
      </Route>

      


      </Router>
      
    
    
  )
}

export default App;
