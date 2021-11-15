import './App.css';
import React , {useEffect , useState} from 'react'
import Input from './Component/Input/Input'
import Posts from './Component/Posts/Posts';
import Audi from './Component//Audi/Audi'
import Registration from './Component/Registration/Registration'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import CookieConsent from "react-cookie-consent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


function App() {
  const [isAuth , setAuth]=useState("")
  const protectedLink = isAuth ? {display:'block'} : {display: 'none'}
  useEffect(()=>{
    setAuth(Boolean(Cookies.get('logged')))
  }
  ,[])
    
return (
  <div>
    <Router>
      <Navbar/>

    <Link style={protectedLink} to="/input"><h1>Poszt küldése</h1></Link>
    <Link style={protectedLink} to="/posts"><h1>Posztok</h1></Link>
    <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/audi" exact><Audi/></Route>
        <Route path="/input"><Input/></Route>
        <Route path="/posts" exact><Posts/></Route>
        <Route to="/registration" exact><Registration/></Route>
        
    </Switch>
    </Router>
    <CookieConsent  buttonText="Értettem" cookieName="myAwesomeCookieName3" expires={999} overlay>
    A weboldal sütiket használ a felhasználói élmény javításához.
    </CookieConsent>
    <ToastContainer/>
</div>       
  );
}

export default App;
