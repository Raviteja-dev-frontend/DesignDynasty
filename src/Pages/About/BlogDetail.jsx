import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./BlogDetail.css";

// 🖼️ Blog Images
import expain_blog from "../../assets/expain_blog.jpg";
import web_maintenance from "../../assets/web_maintencence.jpg";
import website_development_blog from "../../assets/website_development_blog.jpg";
import seo_blog from "../../assets/seo_blog.jpg";
import website_redesign from "../../assets/website_redesign.jpg";
import cyber_security from "../../assets/cyber_security.jpg";

const blogs = [
  {
    id: "website-development",
    title: "Building Powerful Websites That Convert",
    image: website_development_blog,
    category: "Web Design / Development",
    metaTitle: "How to Build High-Converting Websites | Design Dynasty",
    metaDescription:
      "Learn the strategy behind high-converting websites. From UI/UX design to performance and SEO, discover how to build digital experiences that drive results.",
    content: `
### Introduction
In today's digital world, having a beautiful website isn't enough — it needs to **convert visitors into customers**. A high-performing website blends strategy, creativity, and technology to achieve measurable results.

### 1️⃣ Understanding Your Audience
Before designing or coding, identify your target users. What do they value most — speed, design, or trust? A successful website speaks directly to their needs.

### 2️⃣ The Power of UI/UX
User experience defines how visitors interact with your brand. Clean layouts, intuitive navigation, and optimized mobile performance make users stay longer and engage more.

### 3️⃣ Speed & Performance
A delay of even one second can reduce conversions by 7%. Optimize images, enable caching, and use modern frameworks like **React** to improve speed.

### 4️⃣ Conversion-Driven Design
Every section of your website should serve a purpose — guiding the visitor toward taking action. Use clear **CTAs (Call-to-Actions)** and persuasive copy.

### 5️⃣ SEO & Analytics
A great design means nothing if nobody can find it. Optimize for keywords, use structured data, and analyze user behavior to keep improving.

### Conclusion
Your website is your digital storefront. When design, performance, and SEO align, you build not just traffic — but **trust and conversions**.
`,
  },
  {
    id: "web-maintenance",
    title: "Website Maintenance: Keep Your Site Secure & Fast",
    image: web_maintenance,
    category: "Web Maintenance / Security",
    metaTitle: "Why Website Maintenance Matters | Design Dynasty",
    metaDescription:
      "Website maintenance ensures security, speed, and SEO performance. Learn key practices to keep your site running efficiently and securely.",
    content: `
### Why Maintenance Matters
Your website is like a car — it needs regular check-ups. Maintenance ensures your design, plugins, and server stay secure and up to date.

### 1️⃣ Update Plugins & CMS
Outdated plugins are a major source of attacks. Regular updates prevent vulnerabilities and ensure compatibility.

### 2️⃣ Monitor Site Speed
Slow sites increase bounce rates. Tools like **Lighthouse** and **GTmetrix** help you optimize performance.

### 3️⃣ Backups & Security
Always maintain weekly backups and install SSL certificates for user trust and protection.

### 4️⃣ SEO & Analytics
Maintenance includes checking for broken links, updating meta tags, and tracking metrics to keep your site healthy.
`,
  },
  {
    id: "seo-in-2025",
    title: "SEO in 2025: Boost Visibility and Drive Organic Growth",
    image: seo_blog,
    category: "SEO / Digital Marketing",
    metaTitle: "Top SEO Trends in 2025 | Design Dynasty",
    metaDescription:
      "Stay ahead of 2025 SEO trends: AI-powered search, voice optimization, and user experience. Learn how to boost visibility and organic traffic.",
    content: `
### 1️⃣ AI & Search Evolution
AI is transforming SEO — from Google's Search Generative Experience (SGE) to voice-driven queries. Optimize for conversational intent.

### 2️⃣ E-E-A-T Principles
Expertise, Experience, Authoritativeness, and Trustworthiness — the foundation of modern SEO.

### 3️⃣ Core Web Vitals
Speed, stability, and interactivity now directly impact ranking. Prioritize user experience above all.

### 4️⃣ Local & Mobile SEO
Over 70% of traffic comes from mobile. Make your site responsive and locally optimized.
`,
  },
  {
    id: "website-redesign",
    title: "Website Redesign Strategies for Better Engagement",
    image: website_redesign,
    category: "UX / Strategy",
    metaTitle: "Effective Website Redesign Tips | Design Dynasty",
    metaDescription:
      "Redesign your website the smart way. Improve engagement, boost speed, and modernize your brand while keeping users in mind.",
    content: `
### When to Redesign
If your site feels outdated or performs poorly, it’s time for a redesign that improves aesthetics and usability.

### 1️⃣ Keep What Works
Retain strong-performing pages to preserve SEO value and user trust.

### 2️⃣ Modernize the Look
Use sleek layouts, smooth animations, and responsive design for a fresh experience.

### 3️⃣ Improve Conversion Paths
Redesign with clear CTAs, easy navigation, and optimized forms for better user flow.
`,
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for Website Owners",
    image: cyber_security,
    category: "Cybersecurity / IT",
    metaTitle: "Website Cybersecurity Basics | Design Dynasty",
    metaDescription:
      "Protect your business from cyber threats. Learn about firewalls, HTTPS, data encryption, and regular audits for safe web performance.",
    content: `
### Why Cybersecurity Matters
Every website, big or small, is a target. Protecting user data is vital for reputation and compliance.

### 1️⃣ Secure Hosting & SSL
Always use trusted hosting with HTTPS enabled for safe communication.

### 2️⃣ Firewall Protection
A web application firewall filters out malicious traffic before it reaches your server.

### 3️⃣ Regular Security Scans
Use tools like **Sucuri** or **Wordfence** to detect vulnerabilities early.
`,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    if (blog) {
      document.title = blog.metaTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", blog.metaDescription);
    }
  }, [blog]);

  if (!blog)
    return (
      <div className="blog-detail-notfound">
        <h2>Blog Not Found</h2>
        <p>We couldn’t find the blog you’re looking for.</p>
      </div>
    );

  return (
    <div className="blog-detail">
      <div className="blog-hero">
        <img src={blog.image} alt={blog.title} className="blog-hero-img" />
        <div className="overlay"></div>
        <div className="blog-hero-text">
          <h1 className="blog-detail-title">{blog.title}</h1>
          <p className="blog-category">{blog.category}</p>
        </div>
      </div>

      <div className="blog-detail-content container">
        {/* ✅ FIX: wrap ReactMarkdown in a styled div instead of using className directly */}
        <div className="markdown-body">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>

        <Link to="/blogs" className="back-link">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
