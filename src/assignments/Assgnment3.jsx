import { useState } from "react"

export function Assgnment3(){

  const[num,setNum] = useState('')
  const [para, setPara] = useState('')

  const handleclick = ()=>{
    setPara("Thi is para is generated")
  }


  function generatePara(){
      const words = ['This','is','Randomly','Generated','paragraph','Which','Does','not','makes','sense']

      

  }
  return <div> 
   <h2>Para Generator</h2>
   <input type="text" placeholder="Enter Number of words" onChange={(e)=>{setNum(e.target.value)}} />
   <button onClick={handleclick}>Generator</button> 
   <div className="para">{para}</div>
  </div>
}  