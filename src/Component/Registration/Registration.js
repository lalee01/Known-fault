import  {useState} from 'react'

function Registration (){
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [passwordConfirm , setPasswordConfirm] = useState("")
    const [email , setEmail] = useState("")
 const submitHandler=()=>{
    if(password!==passwordConfirm){
        alert("Jelszavak nem egyeznek meg!!!")
        console.log(email , username)
    }
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