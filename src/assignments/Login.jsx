import { useNavigate } from "react-router-dom";
import LoggedIn from "./LoggedIn";

export default function Login(){

  const loggedIn = useNavigate()

  const handdleOninput = (e)=>{  
    if (e.target.value.length == 1) {
      console.log("inside handleoninput");
      const nextInput = e.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus()
      }
    }
  } 
  
   
  const handleKeyup = (e) => { 
    const target = e.target
    const key = e.key.toLowerCase();
  e.preventDefault();
    if ((key ==='backspace' || key === 'delete'))  {
      target.value=''
      const prev = target.previousElementSibling ;
      if (prev) {
        prev.focus();
      }
      return;
    } 
  };
  

 const handleOnclick = ()=>{
    setTimeout(() => {
      loggedIn('/logged-in')
    }, 2000);
 }

  return <div>
    <h1>Log in via otp</h1>
    <div className="otps"> 
    <input className="otp-box" type="number" onKeyUp={handleKeyup} inputMode="numeric" maxLength='1' onInput={handdleOninput}/> 
    <input className="otp-box" type="number" onKeyUp={handleKeyup} inputMode="numeric" maxLength='1' onInput={handdleOninput}/> 
    <input className="otp-box" type="number" onKeyUp={handleKeyup} inputMode="numeric" maxLength='1' onInput={handdleOninput}/> 
    <input className="otp-box" type="text" onKeyUp={handleKeyup} inputMode="numeric" maxLength='1' onInput={handdleOninput}/> 
    </div>
    <br />
    <button onClick={handleOnclick}>Submit</button>
  </div>
}

