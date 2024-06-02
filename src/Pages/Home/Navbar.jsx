import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();  // Call the function
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();  // Call the function
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <div>
        <ul>
          <li><Link to="section1" spy={true} smooth={true} duration={500} onClick={closeMenu}>Section 1</Link></li>
          <li><Link to="section2" spy={true} smooth={true} duration={500} onClick={closeMenu}>Section 2</Link></li>
          <li><Link to="section3" spy={true} smooth={true} duration={500} onClick={closeMenu}>Section 3</Link></li>
        </ul>
      </div>
      <button onClick={toggleNav}>Toggle Nav</button>
    </nav>
  );
}

export default Navbar;
