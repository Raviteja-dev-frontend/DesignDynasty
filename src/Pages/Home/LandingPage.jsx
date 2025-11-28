// src/pages/LandingPage.jsx
import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import {
  FaChartLine,
  FaUsers,
  FaCogs,
  FaClipboardCheck,
  FaBullseye,
  FaHandshake,
  FaChartBar,
  FaTasks,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import DesignDynasty_bording from "../../assets/DesignDynasty_bording.png";
import human_with_Ai from "../../assets/human_with_Ai.gif";
import office_section from "../../assets/office_section.jpg";
import logo_epicmoments from "../../assets/logo_epicmoments.jpg";
import johnson from "../../assets/johnson.jpg";
import Leader_With_mic from "../../assets/Leader_With_mic.png";
import process from "../../assets/process.jpg";

import "./LandingPage.css";
import AnimatedCards from "./AnimatedCards"; // ensure path matches your project
import HeroCards from "./HeroCards";
import { sendEmail } from "../../utils/email";
import { useNavigate } from "react-router-dom";

// Lazy load Slider (react-slick) to reduce initial bundle size
const Slider = lazy(() => import("react-slick"));

const LandingPage = () => {
  const navigate = useNavigate();
  const form = useRef(null);
  const [messageSent, setMessageSent] = useState(false);

  // Testimonials used in sliding area
  const testimonials = [
    {
      name: "Amit Sharma",
      comment:
        "JBC provided excellent service from planning to execution. Highly recommended!",
      designation: "Architect",
    },
    {
      name: "Priya Rao",
      comment:
        "They were professional, punctual, and the output was beyond expectations.",
      designation: "Interior Designer",
    },
    {
      name: "Sandeep Kumar",
      comment: "A fantastic team that listens, understands, and delivers.",
      designation: "Construction Consultant",
    },
  ];

  const benefits = [
    { icon: <FaBullseye />, title: "Reach Your Targeted Audience" },
    { icon: <FaHandshake />, title: "Build Relationship with your clients" },
    { icon: <FaChartLine />, title: "Generate Quality Leads" },
    { icon: <FaChartBar />, title: "Measurable Results" },
    { icon: <FaTasks />, title: "Focus on your core business" },
  ];

  // Slick settings used if you want to use Slider for reviews (we lazy load Slider)
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const reviews = [
    {
      name: "Anosh",
      position: "CEO, Epic Moments",
      rating: 5,
      image: logo_epicmoments,
      text: `Working with this team has been a game-changer. Their expertise in design and development helped us launch our platform efficiently and professionally.`,
    },
    {
      name: "Johnson",
      position: "CEO, JBC Solutions",
      rating: 5,
      image: johnson,
      text: `The professionalism and dedication of the team exceeded our expectations. Our website performance and user engagement have improved significantly.`,
    },
    {
      name: "Ashok",
      position: "CEO, Nironica",
      rating: 5,
      image: "",
      text: `They provided innovative solutions and consistent support throughout our project. Highly recommended for businesses seeking reliable web solutions.`,
    },
    {
      name: "Naidu",
      position: "CEO, Telangana Republican Party",
      rating: 5,
      image: Leader_With_mic,
      text: `The team delivered a high-quality website that represents our vision perfectly. Their approach is professional, creative, and detail-oriented.`,
    },
    {
      name: "David Warner",
      position: "CEO, Creative Thoughts",
      rating: 5,
      image: "",
      text: `Exceptional work! From design to deployment, the process was smooth, and the results speak for themselves. Our users love the new experience.`,
    },
    {
      name: "Lavanya",
      position: "CEO, Sathvika Group",
      rating: 5,
      image: "",
      text: `They transformed our ideas into a functional and beautiful website. The collaboration was seamless, and the end product exceeded our expectations.`,
    },
    {
      name: "Srileela",
      position: "CEO, Trida Silks",
      rating: 5,
      image: "",
      text: `Our website now stands out for its design, speed, and usability. The team was responsive, skilled, and a pleasure to work with.`,
    },
  ];

  // handle submit uses form.current (standard)
  const handleSubmit = (e) => {
    e.preventDefault();
    // sendEmail expects formRef or form element; pass form.current
    sendEmail(
      form,
      () => {
        setMessageSent(true);
        e.target.reset();
      },
      () => {
        alert("Failed to send message. Please try again!");
      }
    );
  };

  // small effect to ensure CSS animations like 'loaded' classes can be applied if needed
  useEffect(() => {
    const t = setTimeout(() => {
      const cards = document.querySelectorAll(".service-card");
      cards.forEach((c) => c.classList.add("loaded"));
    }, 900);
    return () => clearTimeout(t);
  }, []);

  // Local OG image path (developer-provided uploaded file) used for testing.
  const ogImageLocalPath = '/mnt/data/A_logo_design_for_a_company_named_"Design_Dynasty".png';

  return (
    <div className="LandingPage">
      {/* SEO / Meta */}
      <Helmet>
        <title>Design Dynasty – Creative Web Designing & Development Company</title>
        <meta
          name="description"
          content="Design Dynasty is a modern web designing and development company in Hyderabad. We build responsive, SEO-friendly, and powerful websites for startups, brands, and businesses."
        />
        <meta
          name="keywords"
          content="web designing hyderabad, website development hyderabad, design dynasty, creative websites, responsive websites, UI UX design, branding, ecommerce website development"
        />
        <meta name="author" content="Design Dynasty" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://designdynasty.in/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Design Dynasty – Creative Web Designing & Development" />
        <meta
          property="og:description"
          content="We build creative, responsive, and SEO-friendly websites that help your business grow."
        />
        {/* Using local path for testing; replace with public URL on production */}
        <meta property="og:image" content={ogImageLocalPath} />
        <meta property="og:url" content="https://designdynasty.in/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Design Dynasty – Creative Web Designing & Development" />
        <meta name="twitter:description" content="Transforming ideas into beautiful digital experiences." />
        <meta name="twitter:image" content={ogImageLocalPath} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Design Dynasty",
            url: "https://designdynasty.in/",
            logo: ogImageLocalPath,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9182183823",
                contactType: "customer service",
                areaServed: "IN",
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      {/* Benefits section */}
      <section className="benefits-section pt-lg-4 pb-5 pt-0 pt-md-3 text-center">
        <div className="container">
          <h1 className="section-title">Benefits</h1>
          <p className="benefits-desc">
            We follow a proven path to success, and our trusted process has consistently
            delivered results while allowing for personalization to meet your unique needs.
            With a focus on collaboration, we adapt our strategies to align with your goals,
            ensuring a tailored approach that drives impactful outcomes.
          </p>

          <div className="row justify-content-center mt-4">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="benefit-card" role="article" aria-label={benefit.title}>
                  <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
                  <h5 className="benefit-title">{benefit.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-fluid About-Design-Dynasty_Choose">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-4 mb-md-0">
            <img
              src={DesignDynasty_bording}
              alt="About Design Dynasty"
              className="img-fluid About-Design-Dynasty_Choose-img"
              loading="lazy"
            />
          </div>

          {/* Right side content */}
          <div className="col-lg-6 col-md-6 col-sm-12 About-Design-Dynasty_Choose-content">
            <h1 className="About-Design-Dynasty_Choose-title">About Design Dynasty</h1>

            <h2 className="About-Design-Dynasty_Choose-subtitle">
              Empowering Businesses with Smart Software Solutions
            </h2>
            <p className="About-Design-Dynasty_Choose-desc">
              <strong>Design Dynasty</strong> is one of the leading software companies in India,
              dedicated to creating revolutionary digital solutions.
            </p>
            <p className="About-Design-Dynasty_Choose-desc">
              Our team of passionate innovators and developers specialize in
              crafting websites, applications, and marketing solutions that
              empower your business with <em>efficiency, flexibility, and growth</em>.
            </p>
            <p className="About-Design-Dynasty_Choose-desc">
              At Design Dynasty, we analyze your needs closely, ensuring tailored
              strategies that minimize risk while delivering maximum value.
            </p>
            <button
              className="btn About-Design-Dynasty_Choose-btn"
              onClick={() => navigate("/about")}
              aria-label="Get Started with Design Dynasty"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="whyChooseUs">
        <div className="container">
          <div className="row align-items-center">
            {/* Left side title */}
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <h2 className="section-title">Why Choose Design Dynasty</h2>
              <p className="section-subtitle">
                We combine innovation, expertise, and technology to drive your business forward.
              </p>
              <ul className="why-list">
                <li>Customized website solutions tailored to your brand identity</li>
                <li>Modern, responsive, and SEO-friendly designs</li>
                <li>Expert team with 2+ years of hands-on development experience</li>
                <li>Transparent process with on-time delivery</li>
                <li>Dedicated support and long-term partnership approach</li>
              </ul>
            </div>

            {/* Right side cards */}
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
                  <div className="choose-card">
                    <FaChartLine className="choose-icon" />
                    <h5>Proven Track Record</h5>
                    <p>Our success stories showcase measurable growth and business transformation.</p>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
                  <div className="choose-card">
                    <FaUsers className="choose-icon" />
                    <h5>Dedicated Experts</h5>
                    <p>A skilled team that understands your goals and builds strategies that resonate.</p>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
                  <div className="choose-card">
                    <FaCogs className="choose-icon" />
                    <h5>Cutting-Edge Technology</h5>
                    <p>Stay ahead with AI-driven tools and the latest industry innovations.</p>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
                  <div className="choose-card">
                    <FaClipboardCheck className="choose-icon" />
                    <h5>Transparent Reporting</h5>
                    <p>We provide clear, detailed reports so you can track ROI at every step.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    

      {/* Process Section */}
      <section className="process-section py-3 py-md-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">Our Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <h5>1. Understanding Project Requirements</h5>
                  <p>We collaborate with our customers to discuss design goals, market needs, competitors, and the current situation.</p>
                </div>

                <div className="process-step">
                  <h5>2. Setting up a Tailored Plan</h5>
                  <p>Based on our discussions, we prepare a customized plan that fits the client’s specific requirements.</p>
                </div>

                <div className="process-step">
                  <h5>3. Starting the Process</h5>
                  <p>We begin optimizing the project and continuously measure and update clients about the progress.</p>
                </div>

                <div className="process-step">
                  <h5>4. Delivering Results</h5>
                  <p>We ensure every step is executed with precision to achieve the desired outcomes for our clients.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img src={process} alt="Office team working" className="img-fluid office-image" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / HeroCards */}
      <div className="testimonials-clients-section">
        <HeroCards />
      </div>

      {/* Contact Section */}
      <div className="contact-clients-section">
        <div className="contact-section container py-0 py-md-3">
          <div className="row align-items-center">
            {/* Left side text */}
            <div className="col-lg-6 col-md-12 contact-info">
              <h2 className="contact-brand">Design Dynasty</h2>

              <h3 className="contact-heading">
                We’ve Driven over <br />
                <span className="highlight">100+</span><br />
                Leads for our clients. <br />
                <span className="subtext">Discover how we can help your business grow.</span>
              </h3>

              <div className="contact-buttons">
                <button className="btn btn-orange" onClick={() => navigate("/contactpage")}>Approach Us</button>
                <a href="/brochure.pdf" download="DesignDynasty_Brochure.pdf" className="btn btn-blue">Download Brochure</a>
              </div>
            </div>

            {/* Right side form */}
            <div className="col-lg-6 col-md-12 form-col mb-4">
              <div className="form-box">
                <h2 className="form-title text-center">Contact Our Team</h2>
                <p className="form-sub text-center">Have questions or a project in mind? Send us a message below.</p>

                <div className="form-wrapper">
                  <form ref={form} onSubmit={handleSubmit} className="form-ui" aria-label="Contact form">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="phone" placeholder="Phone Number" />
                      </div>
                    </div>

                    <input type="email" name="email" placeholder="Email Address" required />
                    <input type="text" name="subject" placeholder="Subject" />

                    <textarea name="message" placeholder="Write your message..." rows="2" required />

                    <input type="hidden" name="time" value={new Date().toLocaleString()} />

                    <button type="submit" className="send-btn">Send Message</button>

                    {messageSent && <p className="sent-msg">Message sent successfully!</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding testimonial comments (pure CSS animation) */}
      <div className="jbc_comments container-fluid">
        <h2 className="review-title mt-2">Client Review</h2>
        <div className="sliding-comments" aria-hidden="false">
          <div className="carousel-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="testimonial-card" key={`${t.name}-${i}`}>
                <p className="comment">“{t.comment}”</p>
                <h5 className="client-name">{t.name}</h5>
                <p className="designation">{t.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default LandingPage;
