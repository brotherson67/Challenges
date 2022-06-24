import "./Navigation.css";

import React from "react";

function Navigation() {
  return (
    <header>
      {/* Home  */}
      <div>
        <h1>Brotherson</h1>
      </div>
      {/* Page Links */}
      <nav class="links">
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1Fx4yMBenVNGsRJ7WvEXP5A_XmUG8RDsV/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
