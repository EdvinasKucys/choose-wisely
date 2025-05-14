import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingCart, Search } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold text-primary transition-all duration-300 hover:opacity-80"
            >
              {APP_NAME}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/browse") ? "text-primary" : "text-gray-600"
              }`}
            >
              Browse
            </Link>
            <Link
              to="/get-recommendation"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/get-recommendation")
                  ? "text-primary"
                  : "text-gray-600"
              }`}
            >
              Get A Life
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-gray-600"
              }`}
            >
              Profile
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-none">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button
                variant="outline"
                className="rounded-none flex items-center gap-2"
              >
                <span role="img" aria-label="eggplant" className="text-lg">
                  🍆
                </span>
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="rounded-none">
                <span role="img" aria-label="peach" className="text-lg">
                  🍑
                </span>
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-none"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-slide-down">
          <div className="py-4 px-4 space-y-4">
            <Link
              to="/"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/browse") ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              to="/get-recommendation"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/get-recommendation")
                  ? "text-primary"
                  : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Recommendations
            </Link>
            <Link
              to="/dashboard"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full rounded-none">
                  🍆 Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-none">🍑 Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
