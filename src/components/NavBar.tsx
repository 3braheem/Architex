import { useIdle } from "@mantine/hooks";
import { Link } from "react-router-dom";

const NavBar = () => {
  const idle = useIdle(3000);

  const h1Text = idle
    ? "font-display text-5xl line-through"
    : "font-display text-5xl";

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between">
      <h1 className={h1Text}>ARCHITEX</h1>
      <ul className="font-body">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
