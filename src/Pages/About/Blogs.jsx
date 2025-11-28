import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

// 🖼️ Assets
import expain_blog from "../../assets/expain_blog.jpg";
import web_maintenance from "../../assets/web_maintencence.jpg";
import website_development_blog from "../../assets/website_development_blog.jpg";
import seo_blog from "../../assets/seo_blog.jpg";
import website_redesign from "../../assets/website_redesign.jpg";
import cyber_security from "../../assets/cyber_security.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: "website-development",
      title: "Building Powerful Websites That Convert",
      img: website_development_blog,
      desc: "Discover the process of crafting user-focused, high-performing websites that drive conversions and growth.",
    },
    {
      id: "web-maintenance",
      title: "Website Maintenance: Keep Your Site Secure & Fast",
      img: web_maintenance,
      desc: "Learn why ongoing updates, security checks, and optimizations are vital for a healthy, professional website.",
    },
    {
      id: "seo-in-2025",
      title: "SEO in 2025: Boost Visibility and Drive Organic Growth",
      img: seo_blog,
      desc: "Understand modern SEO techniques and how data-driven strategies can enhance your brand’s digital presence.",
    },
    {
      id: "website-redesign",
      title: "Website Redesign Strategies for Better Engagement",
      img: website_redesign,
      desc: "See how a well-planned redesign improves user experience, site performance, and brand reputation.",
    },
    {
      id: "cybersecurity-essentials",
      title: "Cybersecurity Essentials for Website Owners",
      img: cyber_security,
      desc: "Protect your website from digital threats with the latest cybersecurity practices and proactive defense tools.",
    },
  ];

  return (
    <div className="blogs-page">
      {/* Hero Section */}
      <section className="blogs-hero">
        <h1 className="blogs-title">Insights & Innovations</h1>
        <p className="blogs-subtitle">
          Explore website development, cybersecurity, SEO, and digital transformation insights from the Design Dynasty team.
        </p>
      </section>

      {/* Featured Blog */}
      <section className="featured-blog">
        <div className="featured-content">
          <img src={expain_blog} alt="featured blog" className="featured-img" />
          <div className="featured-text">
            <h2>Transforming Businesses Through Smart Web Design</h2>
            <p>
              Modern web design isn’t just about looks — it’s about performance, SEO, and user experience.
              Discover how our approach helps brands grow digitally through creative design, technology, and strong visibility.
            </p>
            <Link to="/blog/website-development">
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="latest-posts">
        <h2>Latest Web Development & Cyber Insights</h2>
        <div className="posts-grid">
          {blogPosts.map((post, i) => (
            <div className="post-card" key={i}>
              <img src={post.img} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <Link to={`/blog/${post.id}`}>
                <button className="read-btn">Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Development Insights */}
      <section className="dev-insights">
        <h2>Development Insights</h2>
        <div className="insight-points">
          <div className="insight-box">
            <h3>💻 Modern Web Frameworks</h3>
            <p>
              Explore how React, Next.js, and Node.js power fast, scalable, and interactive websites for businesses.
            </p>
          </div>

          <div className="insight-box">
            <h3>☁️ Cloud & Security Integration</h3>
            <p>
              Enhance reliability and safety with secure hosting, SSL encryption, and real-time monitoring solutions.
            </p>
          </div>

          <div className="insight-box">
            <h3>📈 Digital Growth & SEO</h3>
            <p>
              Learn how optimized SEO, performance, and content strategies help brands stand out online.
            </p>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="join-community">
        <h2>Join Our Tech Community</h2>
        <p>
          Subscribe to our newsletter and stay ahead with the latest updates in web design, development, and cybersecurity.
        </p>

        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Blogs;
