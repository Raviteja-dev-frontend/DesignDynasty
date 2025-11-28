import React from "react";
import { FaBullhorn, FaCode, FaPaintBrush, FaCogs } from "react-icons/fa";
import "./HeroCards.css";

const HeroCards = () => {
  return (
<div className="container-fluid OurServices py-4 py-md-5">

      <h2 className="hero-title">Smart Digital Services</h2>
      
      {/* Row 1 */}
      <div className="row hero-cards">
        <div className="col-lg-6 col-md-12 d-flex">
          <div className="hero-card">
            <div className="card-header">
              <span className="icon"><FaCode /></span>
              <span className="num">01</span>
            </div>
            <h3>Website Development</h3>
            <ul>
              <li>Theme Design</li>
              <li>Dynamic Secured</li>
              <li>WordPress Customization</li>
              <li>Responsive + Mobile Friendly</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 d-flex">
          <div className="hero-card">
            <div className="card-header">
              <span className="icon"><FaBullhorn /></span>
              <span className="num">02</span>
            </div>
            <h3>Digital Marketing</h3>
            <ul>
              <li>Search Engine Optimization</li>
              <li>Social Media Marketing</li>
              <li>Google Ads Agency</li>
              <li>Content Marketing</li>
              <li>Effective Targeting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row hero-cards">
        <div className="col-lg-6 col-md-12 d-flex">
          <div className="hero-card">
            <div className="card-header">
              <span className="icon"><FaPaintBrush /></span>
              <span className="num">03</span>
            </div>
            <h3>Graphic Designing</h3>
            <ul>
              <li>Branding Kit</li>
              <li>Logo/Brochure</li>
              <li>Corporate Videos</li>
              <li>Corporate Presentations</li>
              <li>Landing Pages</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 d-flex">
          <div className="hero-card">
            <div className="card-header">
              <span className="icon"><FaCogs /></span>
              <span className="num">04</span>
            </div>
            <h3>Software Development</h3>
            <ul>
              <li>WordPress</li>
              <li>UI/UX Development</li>
              <li>Front End Development</li>
              <li>.NET Development</li>
              <li>Backend Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
