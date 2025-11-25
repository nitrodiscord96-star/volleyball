import { Link, useLocation } from "react-router";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/History", label: "history" },
    { path: "/basics", label: "Basics" },
    { path: "/championships", label: "Championships" },
    { path: "/feedbacks", label: "Feedbacks" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://media.discordapp.net/attachments/1329647555335819306/1442826754614886410/volleyball-ball-sport-club-item-vector-48588898.avif?ex=6926d8a0&is=69258720&hm=dc9a92ad2b585d9157e4a3f4c8d5b7d97dfd14d56e311c8166ca733831f749c4&=&format=webp&quality=lossless&width=571&height=571"
            alt="VolleyBall"
            width="45"
            height="45"
            className="rounded-circle me-2"
            style={{
              border: '2px solid #03afff',
              boxShadow: '0 0 15px rgba(3, 175, 255, 0.4)'
            }}
          />
          <span className="gradient-text fw-bold fs-4">VolleyBall</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link px-3 py-2 rounded mx-1 ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2">
            <Languages size={18} />
            <span>EN</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;