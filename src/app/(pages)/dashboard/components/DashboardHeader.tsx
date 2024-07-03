import Link from 'next/link'
import { logout } from '@/app/shared/services/AuthServices'
import { useRouter } from 'next/navigation'

const DashboardHeader = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
  }
  return (
    <header>
      <nav className='navbar bg-base-100'>
        <div className="flex-1">
          <Link href={"/dashboard"} className="text-xl mx-4 cursor-pointer">E-Card Buddy</Link>
        </div>
        <div className="flex">
          <button className={`btn btn-ghost`} onClick={handleLogout}>Sign Out</button>
        </div>
      </nav>
    </header>
    
  )
}

export default DashboardHeader
