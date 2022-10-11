import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Home } from './Pages/Home'

function App() {


  return (
    <div className="App">
      <>
    <Header />
    <Routes>
    <Route path='/home' element={<Home />} />
    </Routes>

    </>
    </div>
  )
}

export default App
