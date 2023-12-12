import React,{useState} from 'react'
import './css/Login.css'
import Quora from './Quora'
export default function Login() {
  const [displayQuora,setDisplayQuora] = useState(false);
  
  const closeQuora = ()=> setDisplayQuora(false);
  return (
    <>
    {displayQuora? <Quora closeQuora={closeQuora}/>:
    <div className='flex_row Main-Container'>
      <div className="Container">
        <div>
          <div><h1>Quora</h1></div>
          <div><p className='login-line'>A place to share knowledge and better understanding the world</p></div>
        </div>
        <div className='flex_row Login-Method'>
          <div className="signup">
             
             <div>
              <button style={{backgroundColor:'blue',color:'white'}}>Continue with Google</button>
              <button style={{backgroundColor:'green',color:'white'}}>Continue with Facebook</button>
             <p className='Signup-line'>Sign up with email</p>

             </div>

             <div><p className='continue-line'>By continuing  you indicates that you agree to Quora's Terms of Service and Privacy Policy</p></div>

          </div>
          <div className="devider"></div>
          <div className="login">
            <h3>Login</h3>
            <form action="">
                 <label htmlFor="Email" className='Email'>Email</label>
                 <input type="email" name="Email" id=""  placeholder='Email' required/>
                 <label htmlFor="Password">Password</label>
                  <input type="password" name="Password" placeholder='Password' required />
                 <div className='flex_row space_bitween'>
                  <div >Forgot Password ?</div>
                  <div className='login-btn'><button style={{backgroundColor:'blue',color:'white'}} onClick={()=>setDisplayQuora(true)}>Login</button></div>
                 </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      </div>
     }
    </>
  )
}
