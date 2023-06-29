import { GiGalaxy } from "react-icons/gi";
import { MdContactPage, MdHome, MdInfo } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <GiGalaxy size={24} />
        <div>IntegerStore</div>
      </Link>
      <nav>
        <NavLink to="/">
          <MdHome size={24} />
          Home
        </NavLink>
        <NavLink to="/servant-info">
          <MdInfo size={24} />
          Servants Info Source
        </NavLink>
        <NavLink to="/about">
          <MdContactPage size={24} />
          About
        </NavLink>
      </nav>
      <Button>Login</Button>
    </header>
  );
}
