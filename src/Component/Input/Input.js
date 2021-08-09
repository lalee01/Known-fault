import React,{useState} from 'react'
import Axios from 'axios'

function Input (){
    const [title , setTitle] = useState("")
    const [manufacturer , setManufacturer] = useState("")
    const [model , setModel] = useState("")
    const [description , setDescription] = useState("")

    const addPost = () =>{
        Axios.post("http://localhost:3001/create",{
            title: title,
            manufacturer: manufacturer,
            model: model,
            description : description,
    }).then (()=>{
        console.log("success")
    })
    }

    
    return(
        <div style={{padding:"5px", marginTop:"15px"}}>
            Cím<br></br>
            <input type="text" name="title" onChange={(event)=>setTitle(event.target.value)}></input><br></br>
            Gyártó<br></br>
            <input type="text" name="manufacturer" onChange={(event)=>setManufacturer(event.target.value)}></input><br></br>
            Modell<br></br>
            <input type="text" name="model" onChange={(event)=>setModel(event.target.value)}></input><br></br>
            Leírás<br></br>
            <input type="text" name="description" onChange={(event)=>setDescription(event.target.value)}></input><br></br>
            <input type="submit" name="submit" onClick={addPost}></input>

        </div>
    );
}
export default Input