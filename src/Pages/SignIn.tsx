import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'



export function SignIn ({ signIn }) {
const[currentUser, setCurrentUser]= useState(null)

function signInn(data){
setCurrentUser(data.user)
localStorage.token=data.token
}
function signOut(){
    setCurrentUser(null)
    localStorage.removeItem("token")
    }
    useEffect(()=>{
        if(localStorage.token){
            fetch(`http://localhost:4000/validate`,{
                headers:
            {
                Authorization : localStorage.token
            }
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }else{
                signInn(data) 
            }
        })
        }
    },[])
  
  return (
    <section className='sign-in'>
      <form onSubmit={(event) => {
        event.preventDefault();

        const user = {
          email: event.target.email.value,
          password: event.target.password.value,
        };
        console.log(user)
          fetch('http://localhost:4000/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(resp => resp.json())
            .then(data => {
              if (data.error) {
                alert(data.error)
              } else {
                signInn(data)
              }
            })
        }}>
        <input type='email' name='email' placeholder='email'required />
        <input type='password' name='password' placeholder='password' required
        
/>
<p> Sign up for GetYourPiZZa</p>
        <button>SIGN IN</button>
      </form>
    </section>
  )
  
}