import React, {useState} from 'react'

function Navbar(){
    const [isItLogged ,setIsItLogged] = useState(false)
    const [enteredUsername , setEnteredUsername] = useState("")
    const [enteredPassword , setEnteredPassword] = useState("")
    const [wrongLogin ,setWrongLogin] = useState(false)

    
    const usernameHandler = (event) =>{
        setEnteredUsername(event.target.value)
    }
    
    const passwordHandler = (event) =>{
        setEnteredPassword(event.target.value)
    }

    const loginHandler =()=>{
      if(enteredUsername == "admin" && enteredPassword == "admin"){
        setIsItLogged (!isItLogged)
      }
      else{
        setWrongLogin(!wrongLogin) 
          }
      }

  
    const isItWrongLogin = wrongLogin ? {display : 'block'} : {display : 'none'}
    const turnHidden = isItLogged ? {display : 'none'} : {display : 'block'}
    const loggedNotify = isItLogged ? "Belépve" : "Belépés"

    return(
        <nav className="navbar  bg-secondary text-uppercase fixed-top"  id="mainNav">
      <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Ismert hibák online</a>
          <button className="navbar-toggler navbar-toggler-right bg-primary text-uppercase font-weight-bold text-white rounded"  type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
              {loggedNotify}
              <i className="fas fa-bars"></i>
               </button>
          <div className="collapse navbar-collapse"  id="navbarResponsive">
              <ul className="navbar-nav ml-auto" style={turnHidden}>
                  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >Felhasználó név 
                  <input type="text" name="username" onChange={usernameHandler}></input></a></li>
                  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >Jelszó
                  <input type="password" name="password" onChange={passwordHandler}></input></a></li>
                  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >
                      <input type="submit" onClick = {loginHandler} value="Bejelentkezés"></input></a></li>
                      <div style={isItWrongLogin}> 
                      <h6 style={{color:"red"}}>Hibás felhasználónév vagy jelszó!</h6>
                        </div>
              </ul>
          </div>
      </div>
  </nav>
    )
}
export default Navbar