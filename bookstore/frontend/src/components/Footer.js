import React from "react";
import { Link } from "react-router-dom";
import "../styles/app-footer.css";

function footer() {
  return (
    <div className="footer">
      <section className="social-media-icons">
        <Link to="/" className="social-media-icon">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="/" className="social-media-icon">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to="/" className="social-media-icon">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="/" className="social-media-icon">
          <i className="fa-brands fa-google"></i>
        </Link>
      </section>
      <section className="links">
        <Link to="/" href="index.html">
          Contact
        </Link>
        <span className="separator">||</span>
        <Link to="/" href="index.html">
          Directions
        </Link>
      </section>
      <p className="copyright">
        <i className="fa-solid fa-copyright"></i> 2023 MugTales || SK
      </p>
    </div>
  );
}

export default footer;
