import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Hire.css";
import ApproachFormPopup from "../About/ApproachFormPopup";

const Hiring = () => {
const [isPopupOpen, setIsPopupOpen] = useState(false);

return ( <div className="hiring-page">
{/* SEO Meta Tags */} <Helmet> <title>Join Design Dynasty | Careers in Web Development & Design</title> <meta name="description" content="Explore career opportunities at Design Dynasty. Join our team of web developers, designers, digital marketers, and innovators in Hyderabad." /> <meta name="keywords" content="Design Dynasty careers, web development jobs, UI/UX designer jobs, SEO jobs, internships Hyderabad" /> <meta name="robots" content="index, follow" /> <link rel="canonical" href="https://yourwebsite.com/careers" />


    {/* Open Graph / Social Sharing */}
    <meta property="og:title" content="Join Design Dynasty | Careers in Web Development & Design" />
    <meta property="og:description" content="Grow your career at Design Dynasty. We offer internships, developer, designer, and HR positions in Hyderabad." />
    <meta property="og:image" content="https://yourwebsite.com/og-image-careers.png" />
    <meta property="og:url" content="https://yourwebsite.com/careers" />
    <meta property="og:type" content="website" />
  </Helmet>

  {/* Popup */}
  {isPopupOpen && <ApproachFormPopup onClose={() => setIsPopupOpen(false)} />}

  {/* Hero Section */}
  <section className="hiring-hero">
    <div className="container text-center">
      <h1 className="hero-title">Join Us & Grow Beyond Limits</h1>
      <p className="hero-subtitle">
        Become a part of Design Dynasty — where creativity, technology, and
        passion come together to build the future of digital innovation.
      </p>
      <button className="hire-btn" onClick={() => setIsPopupOpen(true)}>Approach Us</button>
    </div>
  </section>

  {/* Why Work With Us */}
  <section className="why-us">
    <h2>Why Work With Us?</h2>
    <div className="row g-4 justify-content-center">
      {[
        { title: "💡 Innovation", desc: "Work on cutting-edge technologies and projects that shape global industries." },
        { title: "🌍 Culture", desc: "Be part of a diverse, growth-oriented, and creative team culture." },
        { title: "🚀 Growth", desc: "Experience mentorship, learning opportunities, and career advancement." }
      ].map((item, i) => (
        <div key={i} className="col-12 col-sm-6 col-lg-4">
          <div className="reason-box">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Open Positions */}
  <section className="open-positions">
    <h2>Current Openings</h2>
    {[
      { category: "Internships", jobs: ["BDE Intern / Fresher (1 Position)", "SEO Intern / Fresher (2 Positions)", "SMM / PPC Intern / Fresher (1 Position)"] },
      { category: "Developers", jobs: ["Full Stack Developer (1 Position) – 2+ Years Experience", "WordPress Developer (1 Position) – 2+ Years Experience"] },
      { category: "Designers", jobs: ["Graphic Designer (1 Position) – 5+ Years Experience", "UI/UX Designer (1 Position) – 2+ Years Experience"] },
      { category: "Human Resources", jobs: ["Junior HR Executive (1 Position) – 6+ Months Experience"] }
    ].map((cat, i) => (
      <div key={i} className="job-category">
        <h3>{cat.category}</h3>
        <ul className="job-list">
          {cat.jobs.map((job, j) => (<li key={j}>{job}</li>))}
        </ul>
      </div>
    ))}
  </section>

  {/* Life at Design Dynasty */}
  <section className="life-at">
    <div className="container text-center">
      <h2>Life at Design Dynasty</h2>
      <p>
        Creativity thrives where passion meets purpose. Our workplace blends
        innovation with collaboration, where every idea matters and teamwork
        drives success.
      </p>
      <div className="row g-4 mt-4 justify-content-center">
        {[
          "https://images.unsplash.com/photo-1557804506-669a67965ba0",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
        ].map((img, i) => (
          <div key={i} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
            <img src={img} alt={`life-${i}`} className="life-img" />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Final Call-to-Action */}
  <section className="apply-section">
    <h2>Ready to Join Our Team?</h2>
    <p>
      Send your resume and portfolio to <strong>designdynastyweb@gmail.com</strong>
    </p>
    <button className="cta-btn"onClick={() => setIsPopupOpen(true)}>Apply Now</button>
  </section>
</div>


);
};

export default Hiring;
