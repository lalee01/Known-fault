import  {useState} from 'react'
import Axios from 'axios'
import validator from 'validator'

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

    const submitHandler=()=>{
        console.log(validator.isEmail(email))
        if(password!==passwordConfirm){
            alert("Jelszavak nem egyeznek meg!!!")
        }else{
            Axios.post("http://localhost:3001/register",{
                username: username,
                password: password,
                email: email,
            }).then (()=>{
            alert("Sikeres regisztráció")
            window.location.reload()
            })
        }
    }
 
    return(
        <div>
            <div>
                Username:
                <input type="text" onChange={usernameHandler}></input>
                Password:
                <input type="password" onChange={passwordHander}></input>
                Password confirm:
                <input type="password" onChange={passwordConfirmHandler}></input>
                E-mail:
                <input type="e-mail" onChange={emailHandler}></input>
                <button onClick={submitHandler}>Regisztrálás </button>
             </div>
        </div>
    )
}
export default Registration