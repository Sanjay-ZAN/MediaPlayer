import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './pages/LandingPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <LandingPage/>
    <Footer/>


    </>
  )
}

export default App
