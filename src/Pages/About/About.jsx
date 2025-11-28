import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./About.css";
import about_img_2 from "../../assets/about_img_4.png";
import step_icon_bg1 from "../../assets/step-icon-bg1.png";

import {
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
  FaUsers,
  FaSearch,
  FaCogs,
  FaBullseye,
  FaChartLine,
} from "react-icons/fa";

// Process steps data
const processSteps = [
  {
    id: "01",
    title: "Research",
    desc: "We start by analyzing your goals, audience, and competitors to build a strong foundation.",
    icon: <FaSearch />,
  },
  {
    id: "02",
    title: "Customize",
    desc: "Our team tailors strategies and designs unique solutions to match your business needs.",
    icon: <FaCogs />,
  },
  {
    id: "03",
    title: "Targeting",
    desc: "We focus on the right audience with precision targeting to maximize engagement and reach.",
    icon: <FaBullseye />,
  },
  {
    id: "04",
    title: "Result",
    desc: "Deliver measurable outcomes, growth, and long-term success with transparent reporting.",
    icon: <FaChartLine />,
  },
];

// Steps of our process
const stepsData = [
  { number: "01", text: "Plan your project carefully with our experts and define clear goals." },
  { number: "02", text: "Design the solution creatively, keeping your brand and audience in mind." },
  { number: "03", text: "Develop efficiently with high-quality code and modern technologies." },
  { number: "04", text: "Deliver and support with continuous improvement and client satisfaction." },
];

const coreValuesLeft = [
  { icon: <FaHandshake />, title: "Integrity", text: "We believe in honesty, transparency, and doing the right thing always." },
  { icon: <FaLightbulb />, title: "Innovation", text: "We embrace new ideas and creative solutions to deliver excellence." },
];

const coreValuesRight = [
  { icon: <FaCheckCircle />, title: "Commitment", text: "We are dedicated to exceeding client expectations." },
  { icon: <FaUsers />, title: "Collaboration", text: "We work as one team with our clients to achieve shared goals." },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="about">

      {/* SEO Meta */}
      <Helmet>
        <title>About Us - Design Dynasty India</title>
        <meta name="description" content="Design Dynasty India - Creative Web Development and Digital Solutions in Hyderabad. We deliver innovative web solutions, AI, and digital marketing services." />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Design Dynasty India Private Limited",
              "url": "https://www.yourwebsite.com",
              "logo": "https://www.yourwebsite.com/logo.png",
              "sameAs": ["https://www.facebook.com/yourpage", "https://www.linkedin.com/company/yourcompany"],
              "description": "Creative Web Development and Digital Solutions in Hyderabad"
            }
          `}
        </script>
      </Helmet>

      {/* About Section */}
      <section className="about-section diagonal-box container py-5">
        <div className="row align-items-center">
          {/* Left content */}
          <div className="col-lg-6 mb-4 mb-lg-0 about-text">
            <h2 className="about-title">About Us</h2>
            <p className="about-desc">
              We blend human creativity with cutting-edge artificial intelligence to build
              smart, innovative, and future-ready digital solutions in Hyderabad.
            </p>
            <p className="about-desc">
              Our mission is to craft meaningful digital experiences that empower individuals
              and businesses alike. With expertise in web development, AI, and modern technologies,
              we deliver solutions tailored to your unique needs.
            </p>
            <button
              aria-label="Learn more about our services"
              className="btn btn-learn mt-3"
              onClick={() => navigate("/services")}
            >
              Learn More
            </button>
          </div>

          {/* Right image */}
          <div className="col-lg-6 text-center">
            <img
              src={about_img_2}
              alt="Design Dynasty Team"
              className="about-img img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section pt-5 text-center">
        <div className="container">
          <span className="process-subtitle">How It Works</span>
          <h2 className="process-title">Helping Others Succeed</h2>

          <div className="row mt-5">
            {processSteps.map((step) => (
              <article className="col-lg-3 col-md-6 col-6 mb-4" key={step.id}>
                <div className="process-card">
                  <img src={step_icon_bg1} alt="" className="process-bg" />
                  <div className="process-icon-container" aria-hidden="true">{step.icon}</div>
                  <div className="process-badge">{step.id}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="about-best container text-center">
        <h4>Design Dynasty India Private Limited</h4>
        <h1>Creative Web Development and Digital Solutions in Hyderabad</h1>
        <p>
          Design Dynasty was founded with a vision to craft unique and powerful digital
          experiences for businesses. We specialize in website development, digital
          marketing, and branding solutions that help businesses stand out in today’s
          competitive world.
          <br />
          Our principle is simple: <b>“Design with purpose, develop with passion.”</b>
        </p>
        <button
          aria-label="View our services"
          className="btn btn-outline-primary"
          onClick={() => navigate("/services")}
        >
          View Our Services
        </button>
      </section>

      {/* Core Values */}
      <section className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-lg-4">
            {coreValuesLeft.map((item, i) => (
              <div className="value-card fade-in mb-4" key={i} style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="value-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Middle */}
          <div className="col-lg-4 text-center values-middle fade-in" style={{ animationDelay: `0.6s` }}>
            <h5>Our Core Values</h5>
            <p>
              Equal blame belongs to those who fail in their duty through weakness of will — the same as saying.
            </p>
            <ul className="list-unstyled">
              <li>Integrity</li>
              <li>Commitment to Excellence</li>
              <li>Consumer Focus</li>
              <li>Accountability</li>
              <li>Inclusiveness</li>
            </ul>
            <button className="core-values-readmore" onClick={() => navigate("/services")}>
              Read More
              {[...Array(8)].map((_, i) => <span key={i}></span>)}
            </button>
          </div>

          {/* Right */}
          <div className="col-lg-4">
            {coreValuesRight.map((item, i) => (
              <div className="value-card fade-in mb-4" key={i} style={{ animationDelay: `${(i + 2) * 0.3}s` }}>
                <div className="value-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section container">
        <h2 className="text-center mb-5">Our Process</h2>
        <div className="row justify-content-center">
          {stepsData.map((step, i) => (
            <article className="col-lg-3 col-md-6 mb-4" key={i}>
              <div className="step-card text-center fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="step-circle">{step.number}</div>
                <p className="step-text">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
