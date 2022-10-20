import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp () {
    const[currentUser, setCurrentUser]= useState(null)
    const navigate = useNavigate();
    
function signInn(data){
    setCurrentUser(data.user)
    localStorage.token=data.token
    navigate("/home");
    }
    return(
    <section className='sign-up'>
    <form 
onSubmit={e => {
  e.preventDefault()
  fetch('http://localhost:4000/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value
    })
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        // data = { user, token }
        signInn(data)
      }
    })
}}
>
<h1>Sign up</h1>
<label>
  Email:
  <input type='email' name='email' required placeholder="Enter your email" />
</label>
<label>
  Password:
  <input type='password' name='password' required  placeholder="Enter your paswword"/>
</label>
<button>SIGN UP</button>
</form>
</section>
)}