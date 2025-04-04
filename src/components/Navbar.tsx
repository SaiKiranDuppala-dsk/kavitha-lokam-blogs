
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-kavitha-purple">Kavitha Lokam</h1>
              <span className="mx-2 text-xl">...</span>
              <img 
                src="/lovable-uploads/249c693c-de68-4f17-ae99-4bb5cdd2dcb2.png" 
                alt="Writing hand" 
                className="h-20 w-20"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-kavitha-purple story-link font-medium">Home</Link>
            <Link to="/genres" className="text-gray-700 hover:text-kavitha-purple story-link font-medium">Genres</Link>
            <Link to="/about" className="text-gray-700 hover:text-kavitha-purple story-link font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-kavitha-purple story-link font-medium">Contact</Link>
          </nav>

          <div className="hidden md:flex">
            <Button asChild variant="outline" className="mr-2">
              <Link to={isAuthenticated ? "/admin" : "/login"}>
                {isAuthenticated ? "Admin Dashboard" : "Admin Login"}
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 px-6 space-y-2 bg-white">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/genres" 
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md" 
              onClick={() => setIsMenuOpen(false)}
            >
              Genres
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to={isAuthenticated ? "/admin" : "/login"}
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              {isAuthenticated ? "Admin Dashboard" : "Admin Login"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
