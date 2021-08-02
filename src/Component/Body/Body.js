import React,{useState} from 'react'

function Body(){
    const [selectedManu , setSelectedManu] = useState("default")
    const manuSelector=(event)=>{
        setSelectedManu(event.target.id)
        console.log(selectedManu)
    }
    return(
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Márkák</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <div class="row justify-content-center"  value="audi">

                   <div id="audi" onClick={manuSelector}><h1>AUDI</h1></div>

                    <div class="col-md-6 col-lg-4 mb-5" >
                        <div class="portfolio-item mx-auto" data-toggle="modal" value="audi">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" value="audi">
                                <div class="portfolio-item-caption-content text-center text-white" value="audi">X darab</div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/audi.jpg" alt="..." value="audi"/>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" value="bmw">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">X darab</div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/bmw.jpg" alt="..." />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" value="seat">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">X darab</div>
                            </div>
                            <div></div>
                            <img class="img-fluid" src="assets/img/portfolio/seat.jpg" alt="..." />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" value="vw">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">X darab</div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/vw.png" alt="..." />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Body