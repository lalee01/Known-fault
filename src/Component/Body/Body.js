import React,{useState} from 'react'
import axios from 'axios'
import Input from '../Input/Input'
import Audi from '../Audi/Audi'
import Registration from '../Registration/Registration';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Body(){
    const [selectedManu , setSelectedManu] = useState("default")
    const [listPost , setListPost] = useState([])
    console.log(selectedManu)
    
    const getClickedManu=(event)=>{
        setSelectedManu(event.target.id)
    }
        
        const getPosts = ()=> {
            console.log("kérés elküldve")
        axios.get("http://localhost:3001/getposts").then((response) =>setListPost(response.data))
        }
    
    return(
        <div>
            <Router>
            <Link to="/registration"><h1>Regisztráció</h1></Link>
            <Switch>
                <Route path="/registration"><Registration/></Route>
            </Switch>
            <Link to="/input"><h1>Poszt küldése</h1></Link>
            <Switch>
                <Route path="/input"><Input/></Route>
            </Switch>
            </Router>

        <section class="page-section portfolio">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Márkák</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <div class="row justify-content-center">

                    <div class="col-md-6 col-lg-4 mb-5" >
                        <div class="portfolio-item mx-auto" data-toggle="modal">
                            <Router>
                                <Link to="/audi"><div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="audi" onClick={getClickedManu}></Link>
                                <Switch>
                                <Route path="/audi"><Audi/></Route>
                                </Switch>
                                </Router>
                                <div class="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/audi.jpg" alt="..."/>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="bmw" 
                            onClick={getClickedManu}>
                                <div class="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/bmw.jpg" alt="..." />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="seat"
                            onClick={getClickedManu}>
                                <div class="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                            </div>
                            <div></div>
                            <img class="img-fluid" src="assets/img/portfolio/seat.jpg" alt="..." />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="vw"
                            onClick={getClickedManu}>
                                <div class="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/vw.png" alt="..." />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <div >
            <button className="button" onClick={getPosts}>Összes hiba</button>
        </div>
        
            {listPost.map((val,key)=>{
                return (
                    <div className="card" style={{width:"600px"}} >
                        <div className="card-body">
                            <h5 className="card-title">{val.manufacturer} {val.model}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{val.title}</h6>
                            <p className="card-text">{val.description}</p>
                        </div>
                    </div>
                )
            })}
        
        </div>
        
    )
}
export default Body