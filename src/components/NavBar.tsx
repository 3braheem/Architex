const NavBar = () => {
  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between">
      <h1 className="font-display text-5xl">ARCHITEX</h1>
      <ul className="font-body">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
