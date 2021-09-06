import react , {useState,useEffect} from 'react'
import './Audi.css';
import Axios from 'axios'

function Audi(){
    const [listPost , setListPost] = useState([])

    useEffect (()=>{
        Axios.get("http://localhost:3001/audi").then((response) =>setListPost(response.data))
    },[])

    return(
        <div>
            {listPost.map((val,key)=>{
            console.log(key)
                return (
                    <div className="car_card__container">
                        <div className="car_card">
                            <div className="car_card__content">
                            <h3 className="car_card__header">{val.manufacturer} {val.model}</h3>
                            <p className="car_card__info">{val.title}</p>
                            <button className="car_card__button">Read now</button>
                            </div>
                        </div>
                    </div>
                )
                 } )}
        </div>
    )
}
export default Audi