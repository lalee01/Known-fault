import React, {useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'



function Posts(){
    const [listPost , setListPost] = useState([])
    const getPosts = ()=> {
        console.log(Cookies.get('logged'))
        if(Cookies.get('logged')){
        axios.get("http://localhost:3001/getposts").then((response) =>setListPost(response.data))
        }else{
            alert('Jelentkezz be!!!')
        }
    }
    console.log(listPost)
    return(
        <div>
            <div>
                <button onClick={getPosts}>Lekérdezés</button>
                </div>

        {listPost.map((val)=>{
        console.log(val.name)
            return (
                <div className="car_card__container" style={{padding:"10%"}}>
                    <div className="car_card">
                        <div className="car_card__content">
                        <h3 className="car_card__header">{val.manufacturer} {val.model}</h3>
                        <p className="car_card__info">{val.title}</p>
                        {val.name.map((pic)=>{
                            return(
                             <img src={`//localhost:3001/${pic}`} alt={pic} style={{maxWidth:'200px'}}></img>
                            )
                        })}<br></br>
                        <h3 style={{color:'white'}}>Képek száma:{val.name.length}</h3>
                         <button className="car_card__button">Read now</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>


    )
}
export default Posts