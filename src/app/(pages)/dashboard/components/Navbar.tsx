import Link from 'next/link';
import { logout } from '@/app/shared/services/AuthServices';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
  };
  return (
    <nav className="navbar w-full bg-base-100">
      <div className="flex-1">
        <Link href={'/dashboard'} className="text-xl mx-4 cursor-pointer">
          E-Card Buddy
        </Link>
      </div>
      <div className="flex">
        <button className={`btn btn-ghost`} onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
