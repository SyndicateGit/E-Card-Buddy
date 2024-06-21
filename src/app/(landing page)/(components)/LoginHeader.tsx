import React from 'react'

const LoginHeader = () => {
  return (
    <header>
      <nav className='navbar bg-base-100'>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-Card Buddy</a>
        </div>
        <div className="flex">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-ghost">Signup</button>
        </div>
      </nav>
    </header>
    
  )
}

export default LoginHeader
