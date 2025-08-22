import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/authContext";
import { User, Menu, X } from "lucide-react";
import logo from "../../../public/logo.png";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-purple text-white fixed w-full top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-14 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-10 w-10" src={logo} alt="Logo" />
          <h3 className="text-xl text-beige font-bold press-start-2p-regular">
            <Link to="/">FixFolio</Link>
          </h3>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-xl text-beige vt323-regular">
          <Link to="/" className="hover:opacity-60 transition">Home</Link>
          <Link to="/about" className="hover:opacity-60 transition">About</Link>
          <Link to="/portfolio" className="hover:opacity-60 transition">Portfolio</Link>
          <Link to="/sign-in" className="hover:opacity-60 transition">Login</Link>
          <Link
            to="/sign-up"
            className="px-3 hover:opacity-60 transition"
          >
            SignUp
          </Link>
        </div>

        {/* User + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* User Icon */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center justify-center rounded-full hover:bg-purple-800 p-2 transition"
            >
              <User size={22} />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                {user ? (
                  <>
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="font-bold text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    Not logged in
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-dark-purple text-beige text-lg vt323-regular flex flex-col items-start px-6 pb-4 gap-3">
          <Link to="/" className="hover:opacity-60 transition">Home</Link>
          <Link to="/about" className="hover:opacity-60 transition">About</Link>
          <Link to="/portfolio" className="hover:opacity-60 transition">Portfolio</Link>
          <Link to="/sign-in" className="hover:opacity-60 transition">Login</Link>
          <Link
            to="/sign-up"
            className=" hover:opacity-60 transition"
          >
          SignUp
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
