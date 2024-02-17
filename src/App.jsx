import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Assgnment1 } from './assignments/Assgnment1'
import { Assgnment2 } from './assignments/Assgnment2'
import { Assgnment3 } from './assignments/Assgnment3'
import { Assgnment4 } from './assignments/Assgnment4'
import { Assgnment5 } from './assignments/Assgnment5'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <> 
    <Assgnment1/>
    <Assgnment2/>
    <Assgnment3/>
    <Assgnment4/>
    <Assgnment5/>
    </>
  )
}

export default App
