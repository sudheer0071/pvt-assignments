import { Suspense, useState } from 'react'
import './App.css'
import { Assgnment1 } from './assignments/Assgnment1'
import { Assgnment2 } from './assignments/Assgnment2'
import { Assgnment3 } from './assignments/Assgnment3'
import { Assgnment4 } from './assignments/Assgnment4'
import  Assgnment5  from './assignments/Assgnment5'
import { RecoilRoot } from 'recoil' 
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Login from './assignments/Login' 
import LoggedIn from './assignments/LoggedIn'

function App() {
  const [count, setCount] = useState(0)  
  return (
    <div>  
    {/* <Assgnment1/>  */}
    <RecoilRoot>
    {/* <Assgnment2/> */}
    {/* <Assgnment3/> */}
    </RecoilRoot>
<BrowserRouter>
<Routes> 
    <Route path='/login' element={<Suspense fallback={"Loading..."}><Login/></Suspense>}/><Route/>
    <Route path='/logged-in' element={<Suspense fallback={"Loading..."}><LoggedIn/></Suspense>}/><Route/>
    <Route path='/' element={<Suspense fallback={"Loading..."}><Assgnment5/></Suspense>}/><Route/>
</Routes>
</BrowserRouter>
    {/* <Login /> */}
    </div>
  )
}

export default App
