import { useState, useEffect } from "react";
import logo from "/logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({username}) {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);


  const links = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    if (window.hasCountedVisit) return; 
    window.hasCountedVisit = true;

    let count = localStorage.getItem("visits");

    count = count ? parseInt(count) : 0;

    const newCount = count + 1;

    localStorage.setItem("visits", newCount);
    setVisits(newCount);
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <img src={logo} className="nav-logo" />

          <ul className="nav-links desktop-only">
            {links.map((link) => (
              <li
                key={link.name}
                className={`nav-link ${active === link.name ? "active" : "nav-link"}`}
                onClick={() => setActive(link.name)}
              >
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-user desktop-only">
            <span>Hello, {username}</span>
            <div className="badge">{visits}</div>
          </div>

          <div className="hamburger mobile-only" onClick={() => setMenuOpen(true)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <button onClick={() => setMenuOpen(false)} className="close-btn">
            <IoIosClose />
          </button>
        </div>

        <div className="mobile-links">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`mobile-link ${active === link.name ? "active" : "nav-link"}`}
              onClick={() => {
                setActive(link.name);
                setMenuOpen(false);
              }}
            >
              {link.name}
            </NavLink>
          ))}

          <hr />

          <div className="mobile-user">
            <span>Hello, {username}</span>
            <div className="badge">{visits}</div>
          </div>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default Navbar;
