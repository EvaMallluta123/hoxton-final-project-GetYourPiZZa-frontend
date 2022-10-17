import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Header } from "./components/Header"
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { SignIn } from './Pages/SignIn'
import { useState, useEffect } from 'react'

export default function App () {
  const [currentUser, setCurrentUser] = useState(null)

  function signIn (data) {
    setCurrentUser(data.user)
    localStorage.token = data.token
  }

  function signOut () {
    setCurrentUser(null)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:5678/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signIn(data)
          }
        })
    }
  }, [])

  return (
    <div className="App">
      <>
    <Header />
    <Routes>   
      <Route path='/home' element={<Home />} />
       <Route path='/home' element={currentUser ? <Home/> : <Navigate to='/signIn'/>} />
    <Route path='/about' element={<About />} />
    <Route path='/signIn' element={<SignIn signIn={SignIn} />} />


    </Routes>

    </>
    </div>
  )
}

