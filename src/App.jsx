import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUsSection from './About'
import ProgramsServices from './temp'
import WhyJoinUs from './Join'
import Studentlife from './Life'
import ContactUs from './ontact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/temp' element={<ProgramsServices/>}/>
      <Route path='/aboutus' element={<AboutUsSection/>}/>
      <Route path='/life' element={<Studentlife/>}/>
      <Route path='/join' element={<WhyJoinUs/>}/>
      <Route path='/infra' element={<Home/>}/>
      <Route path='/special' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      

     </Routes>
    </>
  )
}

export default App
