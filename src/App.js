import './App.css';
import React from 'react'
import Input from './Component/Input/Input'
import Audi from './Component//Audi/Audi'
import Registration from './Component/Registration/Registration'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


function App() {
    
return (
  <div>
    <Router>
      <Navbar/>
    <Link to="/input"><h1>Poszt küldése</h1></Link>
    <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/audi" exact><Audi/></Route>
        <Route path="/input" exact><Input/></Route>
        <Route to="/registration" exact><Registration/></Route>
    </Switch>
    </Router>
</div>       
  );
}

export default App;
