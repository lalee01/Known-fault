import React,{useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import Axios from 'axios'
import {Link} from "react-router-dom";
import {uid} from 'uid'

function Navbar(){
  const [isItLogged ,setIsItLogged] = useState(false)
  const [enteredUsername , setEnteredUsername] = useState("")
  const [enteredPassword , setEnteredPassword] = useState("")
  const turnHidden = isItLogged===true ? {display : 'none'} : {display : 'block'}
  const islogOutStyle = isItLogged===true ? {display : 'block'} : {display : 'none'}

  useEffect(()=>{
    setIsItLogged(Boolean(Cookies.get('logged')))
  }
  ,[])

  const logOutHandler = () =>{
    setIsItLogged(false)
    Cookies.remove('logged')
    Cookies.remove('id')
    Cookies.remove('username')
    window.location.reload()
  }

  const usernameHandler = (event) =>{ 
      setEnteredUsername(event.target.value)
  }
  
  const passwordHandler = (event) =>{
      setEnteredPassword(event.target.value)
  }

  const loginHandler =(e)=>{
    e.preventDefault()
   Axios.post("http://localhost:3001/login",{
      username: enteredUsername,
      password: enteredPassword,
    }).then ((response)=>{
      if(Boolean(response.data)){
        setIsItLogged(Boolean(response.data))
        Cookies.set("logged", Boolean(response.data), { expires: 1 })
        Cookies.set("id",uid(16),{expires:1})
        Cookies.set("username",enteredUsername,{expires:1})
        window.location.reload()

      }else{
        alert("Hibás felhasználónév vagy jelszó!")
      }
    })
  }
    return(
      <div>
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
            <form>
            <ul className="navbar-nav ml-auto" style={turnHidden}>
              <li className="nav-item mx-0 mx-lg-1"><h6 className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{color:"white"}}>Felhasználó név:
              <input type="text" name="username" onChange={usernameHandler}></input></h6></li>
              <li className="nav-item mx-0 mx-lg-1"><h6 className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{color:"white"}}>Jelszó:
              <input type="password" name="password" onChange={passwordHandler}></input></h6></li>
              <li className="nav-item mx-0 mx-lg-1"><button type="submit" className="login-button" style={{marginBottom:"20px"}}onClick={loginHandler}>Bejelentkezés</button></li>
               <Link to="/registration"><h5>Regisztráció</h5></Link>
            </ul>
            </form>
            </div>
        </div>
    </nav>
    </div>
    )
}
export default Navbar