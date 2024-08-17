import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu"; // Ensure this matches the file path
import { AuthContext } from "../../AuthContext/AuthContext";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="bg-navi sticky top-0 z-50 text-green-tx">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/images/log/woodheaven-favicon-color.png"
              alt="Logo"
              className="h-14 w-auto mr-4"
            />
            <p className="text-green-tx font-bold text-2xl">WoodHeaven</p>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMobileMenu}>
            <HamburgerMenu isOpen={isMobileMenuOpen} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:flex-grow justify-end md:justify-end space-y-4 md:space-y-0 absolute md:relative top-16 md:top-0 right-0 w-full md:w-auto bg-navi `}
        >
          {isAuthenticated ? (
            <ul className="flex flex-col md:flex-row justify-end items-center md:ml-auto space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  to="/"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/createitem"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Item
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="font-bold hover:underline underline-offset-8"
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col md:flex-row justify-end items-center md:ml-auto space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  to="/"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="font-bold hover:underline underline-offset-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  to="/logIn"
                  className="font-bold hover:underline underline-offset-8"
                >
                  Sign
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

/* <ul className="flex flex-col md:flex-row justify-end items-center md:ml-auto space-y-4 md:space-y-0 md:space-x-6">
<li>
  <Link
    to="/"
    className="font-bold hover:underline underline-offset-8"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Home
  </Link>
</li>
<li>
  <Link
    to="/catalog"
    className="font-bold hover:underline underline-offset-8"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    All Products
  </Link>
</li>
<li>
  <Link
    to="/team"
    className="font-bold hover:underline underline-offset-8"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Team
  </Link>
</li>
<li>
  <Link
    to="/about"
    className="font-bold hover:underline underline-offset-8"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    About us
  </Link>
</li>
<li>
  <Link
    to="/reviews"
    className="font-bold hover:underline underline-offset-8"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Reviews
  </Link>
</li>
<li>
  <Link
    to="/contacts"
    className="font-bold hover:underline underline-offset-8"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Contacts
  </Link>
</li>
<li>
  <Link
    to="/logIn"
    className="font-bold hover:underline underline-offset-8"
  >
    Sign In
  </Link>
</li>
</ul> */
