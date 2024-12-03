import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { themes } from "../utils/constnants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("synthwave");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

  return (
    <nav className="navbar bg-base-200 sticky top-0 z-50">
      <div className="flex-1">
        <Link
          to="home"
          smooth={true}
          duration={200}
          className="btn btn-ghost text-xl cursor-pointer"
        >
          Junaid Syed
        </Link>
      </div>

      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={200}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={200}
              className="cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={200}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <select
              className="select select-accent mx-2 w-full max-w-xs bg-transparent"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              {themes.map((theme) => (
                <option key={theme} value={theme} className="bg-transparent">
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex-none md:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-base-300 md:hidden">
          <ul className="menu menu-vertical px-1 py-2">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={200}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={200}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={200}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={200}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={200}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
