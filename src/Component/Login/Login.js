import  {useState} from 'react'
import Axios from 'axios'

function Registration (){
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const submitHandler=()=>{

            Axios.post("http://localhost:3001/login",{
                username: username,
                password: password,
                email: email,
            }).then (()=>{
            console.log("success")

            })
        
    }
 
    return(
        <div>
            <div>
                Username:
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}}></input>
                Password:
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                Password confirm:
                <input type="password" onChange={(e)=>{setPasswordConfirm(e.target.value)}}></input>
                E-mail:
                <input type="e-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <button onClick={submitHandler}>Regisztrálás </button>
             </div>
        </div>
    )
}
export default Registration