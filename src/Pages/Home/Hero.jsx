// src/components/Hero/Hero.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Hero.css";
import hero_img_1 from "../../assets/hero_img_1.png";

const Hero = () => {
  const listRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = list.querySelectorAll("li");

    const setIndex = (index) => {
      items.forEach((el, i) => el.dataset.active = (index === i).toString());
      list.style.setProperty(
        "grid-template-columns",
        [...items].map((_, i) => (i === index ? "10fr" : "1fr")).join(" ")
      );
    };

    const handleEvent = (event) => {
      const closest = event.target.closest("li");
      if (closest) setIndex([...items].indexOf(closest));
    };

    // initial
    setIndex(0);

    list.addEventListener("focus", handleEvent, true);
    list.addEventListener("click", handleEvent);
    list.addEventListener("pointermove", handleEvent);

    return () => {
      list.removeEventListener("focus", handleEvent, true);
      list.removeEventListener("click", handleEvent);
      list.removeEventListener("pointermove", handleEvent);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Design Dynasty – Transforming Ideas Into Digital Reality</title>
        <meta name="description" content="Empowering businesses with cutting-edge software, web, and blockchain solutions. Seamless, secure, and scalable digital experiences." />
        <link rel="canonical" href="https://designdynasty.in/" />
      </Helmet>

      <header className="hero-dynasty" role="banner" aria-label="Hero">
        <div className="container-fluid dynesty-hero">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="dynesty-hero-text">
                <h1>
                  INNOVATE & <br /> TRANSFORM YOUR <br /> DIGITAL SOLUTIONS
                </h1>

                <p>
                  Empowering businesses with cutting-edge software, web, and blockchain
                  solutions. Seamless, secure, and scalable digital experiences for the modern world.
                </p>

                <div className="dynesty-hero-btns" role="group" aria-label="Hero actions">
                  <button
                    className="dynesty-btn-main"
                    title="Explore Design Dynasty Services"
                    onClick={() => navigate("/services")}
                  >
                    Get Started
                  </button>

                  <button
                    className="dynesty-btn-alt"
                    title="Request a Demo from Design Dynasty"
                    onClick={() => navigate("/contactpage")}
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="dynesty-hero-pic text-center text-lg-end" aria-hidden="false">
                <img
                  src={hero_img_1}
                  alt="Design Dynasty - hero illustration"
                  loading="lazy"
                 
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
