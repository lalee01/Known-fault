import './App.css';
import React,{useState} from 'react'
import Axios from 'axios'
import Input from './Component/Input/Input'
import Audi from './Component//Audi/Audi'
import Home from './Component/Home/Home'
import Registration from './Component/Registration/Registration';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {
  const [isItLogged ,setIsItLogged] = useState(false)
    const [enteredUsername , setEnteredUsername] = useState("")
    const [enteredPassword , setEnteredPassword] = useState("")
    const [listPost , setListPost] = useState([])

    const turnHidden = isItLogged===true ? {display : 'none'} : {display : 'block'}
    const loggedNotify = isItLogged===true ? "Belépve" : "Belépés"
    const isItWrongLogin = isItLogged==="Hibás felhasználónév vagy jelszó!" ? {display : 'block'} : {display : 'none'}
  
 
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
      setIsItLogged(response.data)
      console.log(response.data)
      })
    }
          
    const getPosts = ()=> {
            console.log("kérés elküldve")
            Axios.get("http://localhost:3001/getposts").then((response) =>setListPost(response.data))
    }
    
return (
  <div>
    <Router>
      <nav className="navbar  bg-secondary text-uppercase fixed-top"  id="mainNav">
      <div className="container">
        <Link to="/"><a className="navbar-brand js-scroll-trigger" href="/">Ismert hibák online</a></Link>
        <button className="navbar-toggler navbar-toggler-right bg-primary text-uppercase font-weight-bold text-white rounded"  type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
              {loggedNotify}
              <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse"  id="navbarResponsive">
          <ul className="navbar-nav ml-auto" style={turnHidden}>
            <li className="nav-item mx-0 mx-lg-1"><h6 className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{color:"white"}}>Felhasználó név 
            <input type="text" name="username" onChange={usernameHandler}></input></h6></li>
            <li className="nav-item mx-0 mx-lg-1"><h6 className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{color:"white"}}>Jelszó
            <input type="password" name="password" onChange={passwordHandler}></input></h6></li>
            <li className="nav-item mx-0 mx-lg-1"><button type="submit" className="login-button" style={{marginBottom:"20px"}}onClick={loginHandler}>Bejelentkezés</button></li>
             <div style={isItWrongLogin}> 
                <h6 style={{color:"red"}}>{isItLogged}</h6>
             </div>
          </ul>
          </div>
      </div>
  </nav>
    
    <Link to="/registration"><h1>Regisztráció</h1></Link>
    <Link to="/input"><h1>Poszt küldése</h1></Link>


<Switch>
  <Route path="/" exact><Home/></Route>
   <Route path="/audi" exact><Audi/></Route>
   <Route path="/input" exact><Input/></Route>
   <Route path="/registration" exact><Registration/></Route>
</Switch>
<div >
    <button className="button" onClick={getPosts}>Összes hiba</button>
</div>

    {listPost.map((val,key)=>{
      console.log(key)
        return (
            <div className="card" style={{width:"600px"}} >
                <div className="card-body">
                    <h5 className="card-title">{val.id} {val.manufacturer} {val.model}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{val.title}</h6>
                    <p className="card-text">{val.description}</p>
                </div>
            </div>
        )
    })}

    </Router>
</div>       
  );
}

export default App;
