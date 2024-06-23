import React from 'react'

//TODO: Revamp when landing page is done
const LoginHeader = () => {
  return (
    <header>
      <nav className='navbar bg-base-100'>
        <div className="flex-1">
          <a className="text-xl mx-4 cursor-default">E-Card Buddy</a>
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
