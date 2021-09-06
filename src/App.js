import './App.css';
import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import Cookies from 'js-cookie'
import Input from './Component/Input/Input'
import Audi from './Component//Audi/Audi'
import Home from './Component/Home/Home'
import Registration from './Component/Registration/Registration';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


function App() {
    const [isItLogged ,setIsItLogged] = useState(false)
    const [enteredUsername , setEnteredUsername] = useState("")
    const [enteredPassword , setEnteredPassword] = useState("")
    const turnHidden = isItLogged===true ? {display : 'none'} : {display : 'block'}
    const islogOutStyle = isItLogged===true ? {display : 'block'} : {display : 'none'}

    useEffect(()=>{
      setIsItLogged(Boolean(Cookies.get('username')))
    }
    ,[])

    const logOutHandler = () =>{
      setIsItLogged(false)
      Cookies.remove('username')
    }

    const usernameHandler = (event) =>{ 
        setEnteredUsername(event.target.value)
    }
    
    const passwordHandler = (event) =>{
        setEnteredPassword(event.target.value)
    }

    const loginHandler =()=>{
     Axios.post("http://localhost:3001/login",{
        username: enteredUsername,
        password: enteredPassword,
      }).then ((response)=>{
        if(Boolean(response.data)){
          setIsItLogged(Boolean(response.data))
          Cookies.set("username", Boolean(response.data), { expires: 1 })
        }else{
          alert("Hibás felhasználónév vagy jelszó!")
        }
      })
    }
    
return (
  <div>
    <Router>
      <nav className="navbar  bg-secondary text-uppercase fixed-top"  id="mainNav">
      <div className="container">
        <Link to="/"><a className="navbar-brand js-scroll-trigger" href="/">Ismert hibák online</a></Link>
        <button style={turnHidden} className="navbar-toggler navbar-toggler-right bg-primary text-uppercase font-weight-bold text-white rounded"  type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
              Bejelentkezés
        </button>
        <button onClick={logOutHandler} style={islogOutStyle}className="navbar-toggler navbar-toggler-right bg-primary text-uppercase font-weight-bold text-white rounded"  type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
              Kijelentkezés
        </button>
        <div className="collapse navbar-collapse"  id="navbarResponsive">
          <ul className="navbar-nav ml-auto" style={turnHidden}>
            <li className="nav-item mx-0 mx-lg-1"><h6 className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{color:"white"}}>Felhasználó név:
            <input type="text" name="username" onChange={usernameHandler}></input></h6></li>
            <li className="nav-item mx-0 mx-lg-1"><h6 className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{color:"white"}}>Jelszó:
            <input type="password" name="password" onChange={passwordHandler}></input></h6></li>
            <li className="nav-item mx-0 mx-lg-1"><button type="submit" className="login-button" style={{marginBottom:"20px"}}onClick={loginHandler}>Bejelentkezés</button></li>
             <Link to="/registration"><h5>Regisztráció</h5></Link>
          </ul>
          </div>
      </div>
  </nav>
    
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
