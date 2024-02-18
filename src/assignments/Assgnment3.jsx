import axios from 'axios'
import { useState } from "react"

export function Assgnment3(){

  const[num,setNum] = useState('')
  const [para, setPara] = useState('')

  const handleclick = ()=>{
    setPara("Thi is para is generated")
  }
 
  // const axios = require('axios');

  async function generatePara(){ 
      const words = ['This','is','Randomly','Generated','paragraph','Which','Does','not','makes','sense']

      for (let i = 0; i < words.length; i++) {
         
      }

  }
  return <div> 
   <h2>Para Generator</h2>
   <input type="text" placeholder="Enter Number of words" onChange={(e)=>{setNum(e.target.value)}} />
   <button onClick={generatePara}>Generator</button> 
   <div className="para">{para}</div>
  </div>
}  