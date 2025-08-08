import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-dark-purple text-white px-14 py-2 h-14 top-0 fixed w-full z-50">
        <div className="flex items-center justify-center gap-4">
          <img className=" h-10 w-10" src={logo} alt="Logo" />
          <h3 className="text-xl text-beige font-bold press-start-2p-regular">
            <Link to="/">FixFolio</Link>
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4 text-xl text-beige vt323-regular">
          <Link to="/" className="mx-2 hover:opacity-60 transition-all duration-700">
            Home
          </Link>
          <Link to="/about" className="mx-2 hover:opacity-60 transition-all duration-700">
            About
          </Link>
           <Link to="/portfolio" className="mx-2 hover:opacity-60 transition-all duration-700">
            Portfolio
          </Link>
          <Link to="/sign-in" className="mx-2 hover:opacity-60 transition-all duration-700">
            Login
          </Link>
          <Link to="/sign-up" className="px-2 border-[1.5px] border-beige rounded-md hover:opacity-60 transition-all duration-700">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
