import './App.css'
import './bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import WatchHistory from './pages/WatchHistory'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
     <Route path='/' element={<LandingPage/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/history' element={<WatchHistory/>}/>
    </Routes>
    <Footer/>

    
    </>
  )
}

export default App
