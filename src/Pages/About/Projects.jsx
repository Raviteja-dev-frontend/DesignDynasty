import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";
import portfolio_pic from "../../assets/portfolio_pic.png";
import realestate from "../../assets/realestate.png";
import dashboard from "../../assets/dashboard.jpg";
import JBC_portfolio from "../../assets/JBC_portfolio.png";
import project_epicmoments from "../../assets/project_epicmoments.png";
import Vedha_project from "../../assets/Vedha_project.png";
import Trp_2_portfolio from "../../assets/Trp_2_portfolio.png";
import nironika_project from "../../assets/nironika_project.png";
import Lms_portfolio from "../../assets/Lms_portfolio.png";
import lightHub_portfolio from "../../assets/lightHub_portfolio.png";
import clothing_project from "../../assets/clothing_project.png";
import buybuddy_project from "../../assets/buybuddy_project.png";
import advacate_project from "../../assets/advacate_project.png";
import instagram_project from "../../assets/instagram_project.jpg";
import youtube_project from "../../assets/youtube_project.jpg";
import ApproachFormPopup from "../About/ApproachFormPopup";

const Projects = () => {
const [isPopupOpen, setIsPopupOpen] = useState(false);
const projectData = [
{
  title: "E-Commerce Web Platform",
  img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  desc: "A scalable online store built using React, Node.js, and MongoDB with integrated payment gateways for seamless shopping experiences."
}
,
{
title: "Portfolio Website",
img: portfolio_pic,
desc: "A personal brand website showcasing creativity, projects, and skills with smooth animations and custom CMS integration.",
},
{
title: "Real Estate Management System",
img: realestate,
desc: "A platform for managing property listings, client leads, and transactions with an intuitive user interface.",
},
{
title: "Admin Dashboard",
img: dashboard,
desc: "An analytics dashboard providing business insights and visualized metrics using charts and graphs.",
},
];
const completedProjects = [
  {
    id: 1,
    title: "Epic Moments – Photo Prints Store",
    desc: "A complete e-commerce website for personalized photo gifts, offering seamless ordering and fast checkout.",
    img: project_epicmoments,
    link: "#"
  },
  {
    id: 2,
    title: "JBC Portfolio Website",
    desc: "A creative personal portfolio showcasing projects, skills, and brand identity with smooth UI animations.",
    img: JBC_portfolio,
    link: "#"
  },
  {
    id: 3,
    title: "Vedhaa Infra – Real Estate Website",
    desc: "A premium real estate website featuring project listings, site galleries, location maps, and investor details.",
    img: Vedha_project,
    link: "#"
  },
  {
    id: 4,
    title: "Telangana Republican Party Website",
    desc: "A political organization website designed to showcase objectives, constitution, leaders, and public initiatives.",
    img: Trp_2_portfolio,
    link: "#"
  },
  {
    id: 5,
    title: "Nironika Fans Ordering Website",
    desc: "An online ordering platform for Nironika Fans with product categories, price listings, and inquiry options.",
    img: nironika_project,
    link: "#"
  },
  {
    id: 6,
    title: "Learning Management System",
    desc: "A structured LMS platform offering online courses, video lessons, progress tracking, and user authentication.",
    img: Lms_portfolio,
    link: "#"
  },
  {
    id: 7,
    title: "LightHub Services Website",
    desc: "A service-based company website built with a clean UI, showcasing services, industries, and client contact options.",
    img: lightHub_portfolio,
    link: "#"
  },
  {
    id: 8,
    title: "Clothing Products Store",
    desc: "An online fashion store featuring product categories, size variations, pricing, and a smooth shopping experience.",
    img: clothing_project,
    link: "#"
  },
  {
    id: 9,
    title: "BuyBuddy Shopping Website",
    desc: "A multi-category shopping website with product search, cart features, and user-friendly browsing experience.",
    img: buybuddy_project,
    link: "#"
  },
  {
    id: 10,
    title: "Advocate Services Website",
    desc: "A professional advocate website featuring legal services, case categories, client inquiries, and appointments.",
    img: advacate_project,
    link: "#"
  },
  {
    id: 11,
    title: "Instagram Management Services",
    desc: "A clean website showcasing Instagram growth, page management, promotions, and portfolio examples.",
    img: instagram_project,
    link: "#"
  },
  {
    id: 13,
    title: "YouTube Channel Management",
    desc: "A dedicated service website for creators offering video editing, channel optimization, and growth strategies.",
    img: youtube_project,
    link: "#"
  }
];


const categories = ["Web Development", "Mobile Apps", "Brand Design", "Digital Marketing"];
const processSteps = ["🔍 Research & Strategy", "🎨 Design & Prototyping", "💻 Development", "🚀 Launch & Support"];
const technologies = ["React", "Node.js", "Express", "WordPress", "Cloudinary", "DigitalOcean", "MongoDB", "MySQL", "AWS", "Figma"];

return ( <main className="projects-page">


  {/* React Helmet for SEO */}
  <Helmet>
    <title>Our Projects | Design Dynasty</title>
    <meta name="description" content="Explore Design Dynasty's portfolio of web development, mobile apps, and digital marketing projects. Transforming ideas into innovative digital experiences." />
    <meta name="keywords" content="web development, portfolio, digital marketing, React projects, Node.js, MongoDB, Design Dynasty" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://yourwebsite.com/projects" />

    {/* Open Graph / Social Media */}
    <meta property="og:title" content="Our Projects | Design Dynasty" />
    <meta property="og:description" content="Explore Design Dynasty's portfolio of web development, mobile apps, and digital marketing projects." />
    <meta property="og:image" content="https://yourwebsite.com/og-image.png" />
    <meta property="og:url" content="https://yourwebsite.com/projects" />
    <meta property="og:type" content="website" />
  </Helmet>
  {isPopupOpen && <ApproachFormPopup onClose={() => setIsPopupOpen(false)} />}
  {/* Hero Section */}
  <section className="projects-hero" aria-label="Projects Hero Section">
    <h1>Our Projects – Design Dynasty</h1>
    <p>
      Explore how Design Dynasty transforms ideas into digital experiences that drive growth,
      creativity, and innovation across web development, mobile apps, and digital marketing.
    </p>
  </section>

  {/* Categories Section */}
  <section className="project-categories" aria-label="Project Categories">
    <h1>Project Categories</h1>
    <div className="container-fluid">
      <div className="row justify-content-center g-3">
        {categories.map((category, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="category-box">{category}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Featured Projects Section */}
  <section className="featured-projects" aria-label="Featured Projects">
    <h2>Featured Case Studies</h2>
    <div className="container">
      <div className="row justify-content-center g-4">
        {projectData.map((project, i) => (
          <article className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i} itemScope itemType="https://schema.org/Project">
            <div className="project-card">
              <img src={project.img} alt={project.title + " Screenshot"} loading="lazy" className="img-fluid rounded mb-3" itemProp="image"/>
              <h3 itemProp="name">{project.title}</h3>
              <p itemProp="description">{project.desc}</p>
              <button className="view-btn" type="button">View Project</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
<section className="completed-projects" aria-label="Completed Projects">
  <div className="container">
    <h2 className="section-title text-center mb-4">Completed Projects</h2>

    <div className="row justify-content-center g-4">
      {completedProjects.map((project) => (
        <div
          key={project.id}
          className="col-md-6 col-lg-4 d-flex justify-content-center "
        >
          <div className="project-card">
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-content">
              <h5>{project.title}</h5>
              <p>{project.desc}</p>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  {/* Development Process Section */}
  <section className="process-section-2" aria-label="Development Process">
    <h2>Our Development Process</h2>
    <div className="container">
      <div className="row justify-content-center g-3">
        {processSteps.map((step, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="process-box-2">{step}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Technologies Section */}
  <section className="technologies" aria-label="Technologies We Use">
    <h2>Technologies We Use</h2>
    <div className="container">
      <div className="row justify-content-center g-3">
        {technologies.map((tech, i) => (
          <div className="col-6 col-md-3 col-lg-2" key={i}>
            <div className="tech-box">{tech}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="projects-cta" aria-label="Projects Call To Action">
    <h2>Have a Project in Mind?</h2>
    <p>Let’s collaborate and bring your digital vision to life with Design Dynasty.</p>
    <button className="cta-btn" type="button" onClick={() => setIsPopupOpen(true)}>Start Your Project</button>
  </section>

</main>


);
};

export default Projects;
