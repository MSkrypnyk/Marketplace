import { Link } from "react-router-dom";
import { SignIcon } from "../../icons/SignIcon";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <div className="header__nav">
        <Link to="/" className="header__a">
          Marketplace
        </Link>
        <Link to="/" className="header__a">
          Rankings
        </Link>
        <Link to="/" className="header__a">
          Connect a wallet
        </Link>
      </div>
      <Link to="/" className="header__a header__sign">
        <SignIcon />
        Sign Up
      </Link>
    </header>
  );
};
