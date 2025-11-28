import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Team.css";
import ApproachFormPopup from "../About/ApproachFormPopup";

const Team = () => {
const [isPopupOpen, setIsPopupOpen] = useState(false);

const leaders = [
{ name: "Ravi Teja", role: "Founder & CEO" },
{ name: "Swapna", role: "Co-Founder & Creative Director" },
];

const developers = [
    { name: "Priyanka", role: "Manager", img: "[https://images.unsplash.com/photo-1603415526960-f7e0328f9a7c](https://images.unsplash.com/photo-1603415526960-f7e0328f9a7c)" },
  { name: "Varun", role: "Team Lead", img: "[https://images.unsplash.com/photo-1603415526960-f7e0328f9a7c](https://images.unsplash.com/photo-1603415526960-f7e0328f9a7c)" },
{ name: "Ajay Kumar", role: "Frontend Developer", img: "[https://images.unsplash.com/photo-1603415526960-f7e0328f9a7c](https://images.unsplash.com/photo-1603415526960-f7e0328f9a7c)" },
{ name: "Hari Prasad", role: "UI/UX Designer", img: "[https://images.unsplash.com/photo-1544723795-3fb6469f5b39](https://images.unsplash.com/photo-1544723795-3fb6469f5b39)" },
{ name: "Vikram Reddy", role: "Backend Engineer", img: "[https://images.unsplash.com/photo-1595152772835-219674b2a8a6](https://images.unsplash.com/photo-1595152772835-219674b2a8a6)" },
{ name: "Priya", role: "React Developer", img: "[https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e](https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e)" },
{ name: "Santhoshi", role: "Full Stack Developer", img: "[https://images.unsplash.com/photo-1560250097-0b93528c311a](https://images.unsplash.com/photo-1560250097-0b93528c311a)" },
{ name: "Anosh", role: "Graphic Designer", img: "[https://images.unsplash.com/photo-1552374196-c4e7ffc6e126](https://images.unsplash.com/photo-1552374196-c4e7ffc6e126)" },
{ name: "Kumar", role: "Mobile App Developer", img: "[https://images.unsplash.com/photo-1607746882042-944635dfe10e](https://images.unsplash.com/photo-1607746882042-944635dfe10e)" },
{ name: "Kavya", role: "Motion Graphics Designer", img: "[https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e](https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e)" },
{ name: "Ashif", role: "Database Engineer", img: "[https://images.unsplash.com/photo-1595152772835-219674b2a8a6](https://images.unsplash.com/photo-1595152772835-219674b2a8a6)" },
{ name: "Keerthi", role: "Project Coordinator", img: "[https://images.unsplash.com/photo-1607746882042-944635dfe10e](https://images.unsplash.com/photo-1607746882042-944635dfe10e)" },
{ name: "Suresh Babu", role: "Node.js Developer", img: "[https://images.unsplash.com/photo-1535713875002-d1d0cf377fde](https://images.unsplash.com/photo-1535713875002-d1d0cf377fde)" },
{ name: "Pooja", role: "UI Prototyper", img: "[https://images.unsplash.com/photo-1552374196-c4e7ffc6e126](https://images.unsplash.com/photo-1552374196-c4e7ffc6e126)" },
{ name: "Rajesh", role: "Cybersecurity Analyst", img: "[https://images.unsplash.com/photo-1502685104226-ee32379fefbe](https://images.unsplash.com/photo-1502685104226-ee32379fefbe)" },
{ name: "Akhil", role: "Social Media Manager", img: "[https://images.unsplash.com/photo-1544723795-3fb6469f5b39](https://images.unsplash.com/photo-1544723795-3fb6469f5b39)" },
{ name: "Harish Kumar", role: "API Integration Expert", img: "[https://images.unsplash.com/photo-1568605114967-8130f3a36994](https://images.unsplash.com/photo-1568605114967-8130f3a36994)" },
{ name: "Divya Jain", role: "Creative Content Specialist", img: "[https://images.unsplash.com/photo-1544005313-94ddf0286df2](https://images.unsplash.com/photo-1544005313-94ddf0286df2)" },
{ name: "Abhinav Das", role: "UI Animator", img: "[https://images.unsplash.com/photo-1522071820081-009f0129c71c](https://images.unsplash.com/photo-1522071820081-009f0129c71c)" },
{ name: "Sara Fernandes", role: "Product Designer", img: "[https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e](https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e)" },
];

return ( <div className="team-page">
{/* SEO Meta Tags */} <Helmet> <title>Meet the Team | Design Dynasty</title> <meta name="description" content="Meet the talented team behind Design Dynasty. Our developers, designers, and innovators craft digital experiences that inspire and perform." /> <meta name="keywords" content="Design Dynasty team, web development team, UI/UX designers, developers, Hyderabad web agency" /> <meta name="robots" content="index, follow" /> <link rel="canonical" href="https://yourwebsite.com/team" />


    {/* Open Graph */}
    <meta property="og:title" content="Meet the Team | Design Dynasty" />
    <meta property="og:description" content="Discover the passionate team driving Design Dynasty. Join us or collaborate with our creative and tech experts." />
    <meta property="og:image" content="https://yourwebsite.com/og-image-team.png" />
    <meta property="og:url" content="https://yourwebsite.com/team" />
    <meta property="og:type" content="website" />
  </Helmet>

  {/* Hero */}
  <section className="team-hero">
    <h1>Meet the Minds Behind Design Dynasty</h1>
    <p>We’re a passionate team of developers, designers, and innovators crafting digital experiences that inspire and perform.</p>
  </section>

  {/* About Team */}
  <section className="about-team">
    <h2>Who We Are</h2>
    <p>
      At Design Dynasty, collaboration and creativity drive everything we do. Our team thrives
      on pushing boundaries, turning bold ideas into elegant, high-performing solutions that
      empower brands globally.
    </p>
  </section>

  {/* Leadership Team */}
  <section className="leadership-team">
    <h2>Leadership Team</h2>
    <div className="team-grid">
      {leaders.map((leader, index) => (
        <div className="team-card" key={index}>
          <h3>{leader.name}</h3>
          <p>{leader.role}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Development & Design Team */}
 <section className="dev-team">
  <div className="container">
    <h2 className="text-center mb-4">Development & Design Team</h2>

    <div className="row">
      {developers.map((dev, index) => (
<div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={index}>

          <div className="team-card text-center p-3">
            {/* Image (optional) */}
            {/* <img src={dev.img} alt={dev.name} className="team-img" /> */}

            <h3 className="team-name">{dev.name}</h3>
            <p className="team-role">{dev.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  {/* Design Philosophy */}
  <section className="design-philosophy">
    <h2>Our Design Philosophy</h2>
    <p>
      We believe design is more than visuals — it’s about emotion, interaction, and impact.
      Every line of code and every pixel we place is driven by purpose and creativity.
    </p>
  </section>

  {/* Join Our Team */}
  <section className="join-team">
    <h2>Join Our Growing Family</h2>
    <p>
      Are you a creative mind or coding genius? We’re always looking for passionate people to
      join our journey.
    </p>
    <button className="apply-btn" onClick={() => setIsPopupOpen(true)}>Join Now</button>

    {/* Popup Form */}
    {isPopupOpen && <ApproachFormPopup onClose={() => setIsPopupOpen(false)} />}
  </section>
</div>


);
};

export default Team;
