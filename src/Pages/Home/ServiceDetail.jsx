import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaGlobe,
  FaShoppingCart,
  FaDesktop,
  FaServer,
  FaNetworkWired,
  FaMobileAlt,
  FaLaptopCode,
  FaUsersCog,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import "./ServiceDetail.css";

const serviceDetails = {
  websites: {
    title: "Websites",
    icon: <FaGlobe />,
    description:
      "Our web design and development service focuses on creating responsive, SEO-optimized websites that look stunning on all devices. We use modern technologies like React, Next.js, and WordPress to ensure high performance, scalability, and user-friendly interfaces.",
    features: [
      "Custom design tailored to your brand",
      "Responsive and mobile-friendly layouts",
      "SEO optimization and analytics integration",
      "Fast loading and secure hosting setup",
    ],
  },
  ecommerce: {
    title: "E-commerce",
    icon: <FaShoppingCart />,
    description:
      "We build powerful e-commerce platforms that help you sell online effortlessly. From inventory management to secure payments and delivery tracking, everything is built to grow your business.",
    features: [
      "Secure payment gateway integration",
      "Easy product management dashboard",
      "Customer order tracking and invoices",
      "Discounts, offers, and coupon systems",
    ],
  },
  "desktop-app": {
    title: "Desktop Application",
    icon: <FaDesktop />,
    description:
      "We develop cross-platform desktop applications using Electron and .NET frameworks that run smoothly on Windows, macOS, and Linux.",
    features: [
      "High-performance native-like apps",
      "Offline functionality",
      "Database integration and user management",
      "Seamless updates and deployment",
    ],
  },
  hosting: {
    title: "Hosting",
    icon: <FaServer />,
    description:
      "Our hosting service ensures your website runs 24/7 with top-tier performance, data security, and regular backups.",
    features: [
      "99.9% uptime guarantee",
      "Daily backups and SSL encryption",
      "Scalable cloud-based servers",
      "24/7 technical support",
    ],
  },
  "web-portal": {
    title: "Web Portal",
    icon: <FaNetworkWired />,
    description:
      "We build dynamic web portals for businesses, institutions, and organizations to centralize information, manage users, and improve operations.",
    features: [
      "Role-based access and control",
      "Interactive dashboards and analytics",
      "Integration with APIs and CRMs",
      "Custom admin panels",
    ],
  },
  "mobile-app": {
    title: "Mobile Application",
    icon: <FaMobileAlt />,
    description:
      "Our team creates Android and iOS apps with modern UI/UX, strong backend integration, and optimized performance for all devices.",
    features: [
      "Custom UI/UX design",
      "API and backend connectivity",
      "App Store & Play Store publishing",
      "Push notifications and analytics",
    ],
  },
  "web-app": {
    title: "Web Application",
    icon: <FaLaptopCode />,
    description:
      "We develop full-stack web applications using technologies like React, Node.js, MongoDB, and Express that help automate and grow your business.",
    features: [
      "API development and integration",
      "Admin dashboards and reporting tools",
      "Authentication and user roles",
      "High security and scalability",
    ],
  },
  crm: {
    title: "CRM Softwares",
    icon: <FaUsersCog />,
    description:
      "We provide custom CRM software tailored to manage your sales, customer data, and communication efficiently.",
    features: [
      "Lead and contact management",
      "Sales tracking and reporting",
      "Automation and notifications",
      "Cloud-based data access",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: <FaChartLine />,
    description:
      "Our digital marketing team boosts your online visibility with SEO, social media, paid ads, and branding strategies that convert leads into customers.",
    features: [
      "Search engine optimization (SEO)",
      "Google & Meta Ads campaigns",
      "Social media management",
      "Content and email marketing",
    ],
  },
  "cyber-security": {
    title: "Cyber Security",
    icon: <FaShieldAlt />,
    description:
      "We protect your data and digital assets with advanced security audits, vulnerability testing, and secure architecture planning.",
    features: [
      "Penetration testing and analysis",
      "Network and cloud security",
      "Data encryption and compliance",
      "24/7 threat monitoring",
    ],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="service-detail-container">
        <h2>Service Not Found</h2>
        <Link to="/services" className="back-link">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <div className="service-detail-card">
        <div className="service-detail-icon">{service.icon}</div>
        <h1 className="service-detail-title">{service.title}</h1>
        <p className="service-detail-description">{service.description}</p>
        <ul className="service-features-list">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Link to="/services" className="back-link">
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
