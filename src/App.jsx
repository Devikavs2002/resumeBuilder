import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ResumeGenerator from './pages/ResumeGenerator'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import PNF from './pages/PNF'
import Header from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resumeGenerator' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<FormPage/>}/>
      <Route path='*' element={<PNF/>}/>
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
