import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Header } from "./components/Header"
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { SignIn } from './Pages/SignIn'
import { useState, useEffect } from 'react'
import { Order } from './Pages/Order'
import { Menu } from './Pages/Menu'
import { PizzaDetails } from './Pages/PizzaDetails'
import SignUp from './Pages/SignUp'
import { PageNotFound } from './PageNotFound'

export default function App () {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate();
  const [error, setError] = useState<null | Array<string>>(null);

  function signIn (data) {
    setCurrentUser(data.user)
    localStorage.token = data.token
  }

  function signOut () {
    setCurrentUser(null)
    localStorage.removeItem('token')
navigate("/signIn");


  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:4000/validate', {
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
    <Header signOut={signOut} />
    <Routes>   
      <Route path='/home' element={<Home />} />
       {/* <Route path='/home' element={currentUser ? <Home/> : <Navigate to='/signIn'/>} /> */}
    <Route path='/about' element={<About />} />
    <Route
            path='/products/:id'
            element={<PizzaDetails  setError/>}
          />
    <Route path='/orders' element={<Order />} />
    <Route path='/menu' element={<Menu />} />


    <Route path='/signIn' element={<SignIn  />} />
    <Route path='/signUp' element={<SignUp  />} />
    <Route path='/signUp' element={<PageNotFound  />} />




    </Routes>

    </>
    </div>
  )
}

