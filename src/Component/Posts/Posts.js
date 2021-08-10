import React, {useState} from 'react'
import axios from 'axios'


function Posts(){
    const [listPost , setListPost] = useState([])
    const getPosts = ()=> {
        axios.get("http://localhost:3001/getposts").then((response) =>setListPost(response.data))
    }


    return(

        <div> </div>


    )
}
export default Posts