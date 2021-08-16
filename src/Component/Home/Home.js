import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home(){
    const [selectedManu , setSelectedManu] = useState("default")

    console.log(selectedManu)

    const getClickedManu=(event)=>{
        setSelectedManu(event.target.id)
    }
    
 return(
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
                    
                        
                        <Link  to="/audi">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="audi" onClick={getClickedManu} />
                        </Link>
                   
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
)
}
export default Home