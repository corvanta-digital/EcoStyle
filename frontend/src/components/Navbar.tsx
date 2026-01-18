import { Menu, UserIcon, X } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isActiveLink = (path: string) =>
    location.pathname === path
      ? "text-primary font-bold"
      : "text-neutral-900 hover:text-primary";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-heading font-bold text-primary tracking-tight"
          >
            EcoStyle<span className="text-accent">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActiveLink("/")}`}>
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActiveLink("/about")}`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${isActiveLink("/services")}`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActiveLink("/contact")}`}
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <UserIcon size={20} />
            </Link>
            {/* <Link
              to="/cart"
              className="relative text-gray-600 hover:text-primary transition-colors"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-neutral-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>

            <hr className="border-gray-100" />
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserIcon size={18} /> Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
