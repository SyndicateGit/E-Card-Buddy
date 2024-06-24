import Link from 'next/link'

//TODO: Revamp when landing page is done
const LoginHeader = () => {
  return (
    <header>
      <nav className='navbar bg-base-100'>
        <div className="flex-1">
          <Link href={"/"} className="text-xl mx-4 cursor-pointer">E-Card Buddy</Link>
        </div>
        <div className="flex">
          <Link href={"/login"} className="btn btn-ghost">Signin</Link>
        </div>
      </nav>
    </header>
    
  )
}

export default LoginHeader
