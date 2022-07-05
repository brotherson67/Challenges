import "./Footer.css";

function Footer() {
  return (
    <div id="footer-parent">
      <div className="contact-me" id="contact-me">
        <h3>Contact Me</h3>
      </div>

      <div className="footList">
        <ul>
          <li>
            <tel>(801) 234-0508</tel>
          </li>
          <li>MitchBro.Development@gmail.com</li>
          <li>
            <a href="https://github.com/brotherson67">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mitch-brotherson/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
