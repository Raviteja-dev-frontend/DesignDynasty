// src/components/AnimatedCards/AnimatedCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./AnimatedCards.css";
import {
  FaGlobe,
  FaShoppingCart,
  FaDesktop,
  FaServer,
  FaNetworkWired,
  FaMobileAlt,
  FaLaptopCode,
  FaCameraRetro,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";

const cardData = [
  { id: "websites", title: "Websites", description: "Modern, responsive, and SEO-friendly websites for your brand.", Icon: FaGlobe },
  { id: "ecommerce", title: "E-commerce", description: "Custom online stores with payment gateways and order management.", Icon: FaShoppingCart },
  { id: "desktop-app", title: "Desktop Application", description: "Cross-platform desktop applications built for performance and usability.", Icon: FaDesktop },
  { id: "hosting", title: "Hosting", description: "Fast, secure, and scalable hosting for websites and web apps.", Icon: FaServer },
  { id: "web-portal", title: "Web Portal", description: "Dynamic web portals for managing data, users, and services efficiently.", Icon: FaNetworkWired },
  { id: "mobile-app", title: "Mobile Application", description: "Android and iOS apps with beautiful UI and smooth functionality.", Icon: FaMobileAlt },
  { id: "web-app", title: "Web Application", description: "Powerful full-stack web applications with REST APIs and databases.", Icon: FaLaptopCode },
  { id: "product-shoot", title: "Product Shoot", description: "Professional product photography and videography for brand promotion.", Icon: FaCameraRetro },
  { id: "digital-marketing", title: "Digital Marketing", description: "Boost your online presence with SEO, social media, and ad campaigns.", Icon: FaBullhorn },
  { id: "cyber-security", title: "Cyber Security", description: "Advanced security solutions to protect your business data and privacy.", Icon: FaShieldAlt },
];

const AnimatedCards = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Design Dynasty</title>
        <meta
          name="description"
          content="Explore professional services offered by Design Dynasty including websites, apps, e-commerce, hosting, digital marketing, cyber security and more."
        />
      </Helmet>

      <section className="service_card_main_section" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading" className="services-title">What We Offer</h2>

          <div className="row justify-content-center gy-4">
            {cardData.map((card, index) => {
              const Icon = card.Icon;
              return (
                <div
                  key={card.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-center"
                >
                  <Link
                    to={`/service/${card.id}`}
                    className="service-card w-100"
                    style={{ ["--delay"]: index }}
                    aria-label={`${card.title} service`}
                  >
                    <article itemScope itemType="https://schema.org/Service">
                      <div className="service-icon" aria-hidden="true">
                        <Icon />
                      </div>
                      <h3 itemProp="name" className="service-name">{card.title}</h3>
                      <p itemProp="description" className="service-description">{card.description}</p>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedCards;
