import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      {/* Top bar (address, contact, email, social links) */}
      <div className="header-top-bar">
        
        {/* Address */}
        <div className="header-location">
          <span><FaMapMarkerAlt /> Hyderabad, Telangana, India</span>
        </div>

        {/* Contact info */}
        <div className="header-contact-info">
          <span><FaPhoneAlt /> +91 91821 83823 / +91 96526 80796</span>
          <span><FaEnvelope /> designdynastyweb@gmail.com</span>
        </div>

        {/* Social icons */}
        <div className="header-social-icons">
          <a href="https://www.facebook.com/share/1FYg4LiY3j/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
         <a
  href="https://www.instagram.com/designdynastysoftwares/"
  target="_blank"
  rel="noreferrer"
>
  <FaInstagram />
</a>

        </div>
      </div> 
    </header>
  );
};

export default Header;
