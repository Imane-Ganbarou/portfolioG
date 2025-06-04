import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        {/* Logo */}
        <Link to="accueil" smooth={true} duration={500} className="cursor-pointer">
          <img className="h-20" src="Ganbarou.png" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex font-semibold text-base lg:text-lg">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="text-blue-600 font-bold"
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-3">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="text-blue-600 font-bold"
            className="border border-black rounded-lg font-bold px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="/cv-iman.pdf"
            download
            className="border border-black rounded-lg font-bold px-6 py-2 hover:bg-black hover:text-white transition"
          >
            Télécharger CV
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-md px-4 py-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-blue-600 font-bold"
              className="block text-lg font-medium hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="text-blue-600 font-bold"
            className="block text-lg font-medium hover:text-blue-400 cursor-pointer transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <a
            href="/cv-iman.pdf"
            download
            className="block text-lg font-medium border border-black rounded-lg px-6 py-2 hover:bg-black hover:text-white transition"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </header>
  );
}
