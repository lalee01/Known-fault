import {useState} from 'react'
import {Link} from "react-router-dom";

function Home(){
    const [selectedManu , setSelectedManu] = useState("default")

    const getClickedManu=(event)=>{
        setSelectedManu(event.target.id)
    }
    
 return(
    <section className="page-section portfolio">
    <div className="container">
        
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Márkák</h2>
        
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"></div>
            <div className="divider-custom-line"></div>
        </div>
        
        <div className="row justify-content-center">

            <div className="col-md-6 col-lg-4 mb-5" >
                <div className="portfolio-item mx-auto" data-toggle="modal">
                    
                        
                        <Link  to="/audi">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="audi" onClick={getClickedManu} />
                        </Link>
                   
                    <img className="img-fluid" src="assets/img/portfolio/audi.jpg" alt="..."/>
                </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-toggle="modal" >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="bmw" 
                    onClick={getClickedManu}>
                        <div className="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/bmw.jpg" alt="..." />
                </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-toggle="modal">
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="seat"
                    onClick={getClickedManu}>
                        <div className="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                    </div>
                    <div></div>
                    <img className="img-fluid" src="assets/img/portfolio/seat.jpg" alt="..." />
                </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-toggle="modal">
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" id="vw"
                    onClick={getClickedManu}>
                        <div className="portfolio-item-caption-content text-center text-white noClick">X darab</div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/vw.png" alt="..." />
                </div>
            </div>
            
        </div>
    </div>
</section>
)
}
export default Home