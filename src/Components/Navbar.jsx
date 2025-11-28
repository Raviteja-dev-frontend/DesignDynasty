import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import DesignDynasty_logo from "../assets/Design_Dynasty_logo_1.png";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={DesignDynasty_logo} alt="Design Dynasty Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end className="navbar-link" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/services" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/projects" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/hire" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Hire
        </NavLink>
        <NavLink to="/team" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Our Team
        </NavLink>
        <NavLink to="/contactpage" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
        <NavLink to="/blogs" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Blog
        </NavLink>
      </div>

      {/* Search Icon / Input */}
      <div className="navbar-search-wrapper">
        {!showSearch ? (
          <FaSearch className="search-icon" onClick={() => setShowSearch(true)} />
        ) : (
          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
