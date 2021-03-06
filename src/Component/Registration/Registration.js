import  {useState} from 'react'
import Axios from 'axios'
import validator from 'validator'
import {toast} from 'react-toastify'

function Registration (){
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [passwordConfirm , setPasswordConfirm] = useState("")
    const [email , setEmail] = useState("")
    
    const usernameHandler =(event) =>{
        setUsername(event.target.value)
    }
    const passwordHander =(event) =>{
        setPassword(event.target.value)
    }
    const passwordConfirmHandler =(event) =>{
        setPasswordConfirm(event.target.value)
    }
    const emailHandler =(event) =>{
        setEmail(event.target.value)
    }

    const validationHandler=()=>{
        if(validator.isLength(username,{min:6,max:16})&&
            validator.equals(password,passwordConfirm)&&
            validator.isLength(password,{min:6,max:16})&&
            validator.isEmail(email)&&
            validator.isLength(email,{min:6,max:256}))
        {
            submitHandler()
        }else{
            toast.error("Beviteli mező nem jó")
        }
    }
    const submitHandler=()=>{
            Axios.post("http://localhost:3001/register",{
                username: username,
                password: password,
                email: email,
            }).then ((response)=>{
                if(Boolean(response.data[1])){
                    toast.success(response.data[0])
                    setTimeout(function() {
                        window.location.reload()
                    }, 8000)
                }else{
                    toast.error(response.data[0])
                }
            })
        }
 
    return(
        <div>
            
            <div>
                Username:
                <input type="text" onChange={usernameHandler}></input><br></br>
                Password:
                <input type="password" onChange={passwordHander}></input><br></br>
                Password confirm:
                <input type="password" onChange={passwordConfirmHandler}></input><br></br>
                E-mail:
                <input type="e-mail" onChange={emailHandler}></input><br></br>
                <button onClick={validationHandler}>Regisztrálás </button>
             </div>
             
        </div>
    )
}
export default Registration