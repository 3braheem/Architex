import { useIdle } from "@mantine/hooks";

const NavBar = () => {
  const idle = useIdle(3000);

  const h1Text = idle
    ? "font-display text-5xl line-through"
    : "font-display text-5xl";

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between">
      <h1 className={h1Text}>ARCHITEX</h1>
      <ul className="font-body">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
