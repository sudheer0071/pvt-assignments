import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Assgnment5(){
const wide = useNavigate()
const [phoneno, setPhoneno] = useState('') 

  function sendOtp(){ 
    setTimeout(() => {
      wide('/login')
    }, 2000);
  } 
  return <div>
    <h1>Login Via OTP</h1>
    <input type="number" onChange={(e)=>{setPhoneno(e.target.value)}}/>
    <br /><br /> 
    <div className="btn">
      <a class="button-85" role="button" onClick={sendOtp}> 
        Send OTP
      </a>
    </div> 
  </div>
}