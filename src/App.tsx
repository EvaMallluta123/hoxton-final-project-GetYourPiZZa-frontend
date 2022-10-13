import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Home } from './Pages/Home'
import { About } from './Pages/About'

function App() {


  return (
    <div className="App">
      <>
    <Header />
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />

    </Routes>

    </>
    </div>
  )
}

export default App
