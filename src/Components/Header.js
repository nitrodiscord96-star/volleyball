import { Link, useLocation } from "react-router";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/championships", label: "Championships" },
    { path: "/feedbacks", label: "Feedbacks" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://cdn.discordapp.com/attachments/1315674560263229570/1441441212367376384/images.jpg?ex=6921ce3d&is=69207cbd&hm=9400cca5f07eb74a0004f0492b5696fe30af73e08acf372580dca726c1354c9a&"
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