const Header = () => {
  return (
    <header className="navbar bg-base-100 flex w-full items-center justify-between">
      <div className="mx-2">
        <a className="xl:text-xl md:text-lg sm:text-base font-bold text-nowrap">E-Card Buddy</a>
      </div>
      <div className="gap-2 mx-2">
        <a className="btn">Login</a>
        <a className="btn btn-primary">Get Started</a>
      </div>
    </header>
  );
}

export default Header;
