import React from 'react'
import Link from 'next/link'


const Register = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='display name'/>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <input type='file'/>
          <button>Sign up</button>
        </form>
        <p>Do you have an account?
          <Link href='/login'>
            <span> Login</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
