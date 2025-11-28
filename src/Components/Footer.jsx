import React from "react";
import { Helmet } from "react-helmet";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import DesignDynasty_logo from "../assets/Design_Dynasty_logo_1.png";

export default function Footer() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Design Dynasty - Professional Web Development</title>
        <meta
          name="description"
          content="Design Dynasty offers modern, responsive and custom website design and development services."
        />
        <meta
          name="keywords"
          content="web design, website development, react developer, ecommerce websites, design dynasty"
        />
        <meta name="author" content="Design Dynasty" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>

      <footer className="footer">
        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col footer-brand">
            <img src={DesignDynasty_logo} alt="Logo" className="footer-logo-img" />
            <h3>Design Dynasty</h3>
            <p>
              We build high-quality, responsive and custom websites
              that help businesses grow and stand out online.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contactpage">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Custom Web Applications</li>
              <li>Landing Page Design</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4>Follow Us</h4>

            <div className="social-icons">
              <a 
                href="https://www.facebook.com/share/1FYg4LiY3j/" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a 
                href="https://www.instagram.com/designdynastysoftwares/" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a 
                href="https://wa.me/919182183823" 
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <p>
                <strong>Phone: </strong>
                <a href="tel:+919182183823">+91 91821 83823</a>
              </p>

              <p>
                <strong>Alternate: </strong>
                <a href="tel:+919652680796">+91 96526 80796</a>
              </p>

              <p>
                <strong>Email: </strong>
                <a href="mailto:designdynastyweb@gmail.com">
                  designdynastyweb@gmail.com
                </a>
              </p>

              <p>
                <strong>Address:</strong> Hyderabad, Telangana, India
              </p>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Design Dynasty. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
