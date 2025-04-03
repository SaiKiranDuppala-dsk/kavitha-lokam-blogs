
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kavitha-purple text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Kavitha Lokam</h3>
            <p className="text-sm max-w-xs">A personal blog by Sai Kiran Duppala, dedicated to poetry, stories, and literary explorations.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-kavitha-peach transition-colors">Home</Link></li>
              <li><Link to="/genres" className="text-sm hover:text-kavitha-peach transition-colors">Genres</Link></li>
              <li><Link to="/about" className="text-sm hover:text-kavitha-peach transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-kavitha-peach transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/kavitha_lokam_dsk/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-kavitha-peach transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/sai-kiran-duppala/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-kavitha-peach transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Phone: +91 7995038113</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-sm">&copy; {currentYear} Kavitha Lokam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
