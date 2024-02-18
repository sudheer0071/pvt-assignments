import { useState } from "react"
import { object } from "zod"

export function Assgnment4(){
  const [username, setUsername] = useState('')
  const [infor, setInfor] = useState([])

  async function getInfo(){
    const response = await fetch('https://api.github.com/users/'+username, {
      method:'GET',
      headers:{
        'Content-Type':'text/css'
      }
    })
    if (response.ok) {
      const info = await response.json()
      console.log(info);
      setInfor(info) 
    }
  }

  function information(){
    const info =  infor.map((info)=>{
      return <div>
        <h1>{info.login}</h1>
        <h2>{info.id}</h2>
        <h2>{info.node_id}</h2>
      </div>
      })
      setInfor(info)
    }
  
  return <div>
      <button onClick={()=>{setUsername('sudheer0071');getInfo();}}>git details</button>
     <div className="git-card">
     {infor && (
        <div>
          <h2>{infor.login}</h2>
           {infor.id}
        </div>
    )}
     </div>
  </div>
}