import React,{useState} from 'react'
import Axios from 'axios'
import {toast} from 'react-toastify'
import Cookies from 'js-cookie'
import { uid } from 'uid'
import validator from 'validator'

function Input (){
    const [title , setTitle] = useState("")
    const [manufacturer , setManufacturer] = useState("")
    const [model , setModel] = useState("")
    const [description , setDescription] = useState("")
    const [files,setFiles] = useState([])
    const [source,setSource]= useState("")

    const validationHandler = ()=>{
        if(validator.isLength(title,{min:3,max:16})&&
            validator.isLength(manufacturer,{min:1,max:16})&&
            validator.isLength(model,{min:1,max:16})&&
            validator.isLength(description,{min:6,max:128})&&
            validator.isLength(source,{min:1,max:16})
        ){
            addPost()
        }else{
            toast.error('Beviteli mező Error')
        }
    }

    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    }

    const fileUploadHandler=(e)=>{
        setFiles(e.target.files)
    }
    const addPost = () =>{

        const data = new FormData()
        const postid= uid(15)

        Axios.post("http://localhost:3001/create",{
            title: title,
            manufacturer: manufacturer,
            model: model,
            description : description,
            postid:postid,

            }).then (()=>{
                console.log("success")
            })
        
        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        Axios.post('http://localhost:3001/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                console.log(data)
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })

        for(let i = 0; i < files.length; i++) {
            console.log(files[i].name)
            Axios.post("http://localhost:3001/uploaddb",{
                username:Cookies.get("username"),
                postid:postid,
                name:files[i].name,
                source:source
            })
        }
        }
    
    return(
        <div style={{padding:"5px", marginTop:"15px"}}>
            Cím:<br></br>
            <input type="text" name="title" onChange={(event)=>setTitle(event.target.value)}></input><br></br>
            Gyártó:<br></br>
            <input type="text" name="manufacturer" onChange={(event)=>setManufacturer(event.target.value)}></input><br></br>
            Modell:<br></br>
            <input type="text" name="model" onChange={(event)=>setModel(event.target.value)}></input><br></br>
            Leírás:<br></br>
            <input type="text" name="description" onChange={(event)=>setDescription(event.target.value)}></input><br></br>
            <form method="post" action="#" id="#">
                <div className="form-group files" ><br></br>
                    <input type="file" onChange={fileUploadHandler} className="form-control"  multiple/>
                </div>  
            </form>
            <br></br>
            Forrás:
            <br></br>
            <input type="text" name="source" onChange={(event=>{setSource(event.target.value)})}></input>
            <button type="submit" onClick={validationHandler}>Küldés</button>
        </div>
    );
}
export default Input