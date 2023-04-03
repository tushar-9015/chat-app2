import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
      <div className='login-container'>
        <div className='login-wrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>login</span>
        <div className='login-inputs'>
          <input type='email' className='email-input' placeholder='email'></input>
          <label className='email-input' ></label>
          <input type='text' className='password-input' placeholder='password'></input>
          <label className='password-input' ></label>
        </div>
        <button className='login-btn'>Sign in</button>
        
        <p>You don't have an account?
        <Link href='/register'>
        <span  >Register</span>
        </Link>
        </p>
        
      </div>
    </div>
  )
}

export default Login
