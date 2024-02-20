import { useCallback, useState } from "react"

export function Assgnment5(){

const [phoneno, setPhoneno] = useState('')
const [submitotp, setSubmitotp] = useState('')

  function sendOtp(){ 
  } 
  return <div>
    <h1>Login Via OTP</h1>
    <input type="text" onChange={(e)=>{setPhoneno(e.target.value)}}/>
    <br /><br /> 
    <div className="btn">
      <a class="button-85" role="button" onClick={sendOtp}> 
        Send OTP
      </a>
    </div> 
  </div>
}