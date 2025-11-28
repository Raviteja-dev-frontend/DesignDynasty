// src/pages/Services/Services.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";

import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaShoppingCart,
  FaLaptopCode,
} from "react-icons/fa";

import "./Services.css";

// Make sure all assets exist
import animated_video from "../../assets/animated_video.mp4";
import system_line_img from "../../assets/system_line_img.png";
import responsive_icon from "../../assets/responsive_icon.png";
import seo_icon from "../../assets/seo_icon.png";
import maintenance_icon from "../../assets/maintenance_icon.png";
import lowcost_icon from "../../assets/lowcost_icon.png";

import ApproachFormPopup from "../About/ApproachFormPopup";

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    { icon: <FaCode />, title: "Web Development", description: "Building responsive and dynamic websites using the latest technologies." },
    { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Designing intuitive user interfaces and seamless user experiences." },
    { icon: <FaServer />, title: "Backend Development", description: "Creating powerful server-side applications and APIs." },
    { icon: <FaSearch />, title: "SEO Optimization", description: "Boosting website ranking and search engine visibility." },
    { icon: <FaBullhorn />, title: "Digital Marketing", description: "Promoting your brand through strong online marketing strategies." },
    { icon: <FaChartLine />, title: "Analytics & Reporting", description: "Tracking performance and improving business decisions." },
    { icon: <FaLaptopCode />, title: "CMS Development", description: "Developing custom or WordPress-based CMS platforms." },
    { icon: <FaShoppingCart />, title: "E-commerce Solutions", description: "Building secure, scalable online stores." },
  ];

  return (
    <div className="company-services">
      <Helmet>
        <title>Website Design Services | Design Dynasty</title>
        <meta name="description" content="Design Dynasty provides web design, development, SEO, digital marketing, and e-commerce services." />
      </Helmet>

      {isPopupOpen && <ApproachFormPopup onClose={() => setIsPopupOpen(false)} />}

      {/* Hero Section */}
      <section className="Services-hero">
        <div className="Services-hero-content">
          <h1>Top Website Design Services in Hyderabad</h1>
          <p>
            We create highly responsive, modern, and visually stunning websites that help businesses grow online.
          </p>
          <button className="btn About-Design-Dynasty_Choose-btn_services" onClick={() => setIsPopupOpen(true)}>
            Get Started
          </button>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-page">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={animated_video} type="video/mp4" />
        </video>

        <div className="container content-overlay">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-1">
                <div className="service-icon-1">{service.icon}</div>
                <h3 className="service-title-1">{service.title}</h3>
                <p className="service-description-1">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className="services-intro-section">
        <span className="circle-icon"></span>
        <span className="circle-icon"></span>
        <span className="circle-icon"></span>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <img src={system_line_img} alt="System workflow" className="intro-image" />
            </div>

            <div className="col-md-7 content-wrapper">
              <h2 className="intro-title">Affordable & Creative Web Designing</h2>
              <p className="intro-text">
                We deliver professional, responsive, and high-performance websites using the latest technologies and creative designs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="services-about-section">
        <h3 className="sub-title">Our Features</h3>

        <div className="features-cards">
          <div className="feature-card">
            
            <img src={maintenance_icon} alt="Maintenance" />
            <h4>Free Website Maintenance</h4>
            <p>Enjoy free support and regular updates.</p>
          </div>

          <div className="feature-card">
            <img src={lowcost_icon} alt="Low Cost" />
            <h4>Affordable Pricing</h4>
            <p>Premium designs at budget-friendly rates.</p>
          </div>

          <div className="feature-card">
            <img src={seo_icon} alt="SEO" />
            <h4>SEO Optimized</h4>
            <p>Rank higher with SEO-friendly coding and structure.</p>
          </div>

          <div className="feature-card">
            <img src={responsive_icon} alt="Responsive" />
            <h4>Responsive Design</h4>
            <p>Perfectly optimized for all devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
