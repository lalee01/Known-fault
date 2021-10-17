import React,{useState} from 'react'
import Axios from 'axios'
import {toast} from 'react-toastify'

function Input (){
    const [title , setTitle] = useState("")
    const [manufacturer , setManufacturer] = useState("")
    const [model , setModel] = useState("")
    const [description , setDescription] = useState("")
    const [files,setFiles] = useState([])
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    }

    const fileUploadHandler=(e)=>{
        setFiles(e.target.files)
    }
    const addPost = (e) =>{
        e.preventDefault()
        console.log(files)

        const data = new FormData()

        Axios.post("http://localhost:3001/create",{
            title: title,
            manufacturer: manufacturer,
            model: model,
            description : description,
            }).then (()=>{
                console.log("success")
            })
        
        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        Axios.post('http://localhost:3001/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
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
            <form method="post" action="#" id="#">
                <div className="form-group files" ><br></br>
                    <input type="file" onChange={fileUploadHandler} className="form-control"  multiple/>
                </div>  
            </form> 
            <button type="submit" onClick={addPost}>Küldés</button>
        </div>
    );
}
export default Input