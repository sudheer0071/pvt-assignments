import { useState } from 'react'
import './App.css'
import { Assgnment1 } from './assignments/Assgnment1'
import { Assgnment2 } from './assignments/Assgnment2'
import { Assgnment3 } from './assignments/Assgnment3'
import { Assgnment4 } from './assignments/Assgnment4'
import { Assgnment5 } from './assignments/Assgnment5'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0) 
  return (
    <div> 
    {/* <Assgnment1/>  */}
    <RecoilRoot>
    <Assgnment2/>
    </RecoilRoot>
    {/* <Assgnment3/> */}
    {/* <Assgnment4/> */}
    {/* <Assgnment5/> */}
    </div>
  )
}

export default App
