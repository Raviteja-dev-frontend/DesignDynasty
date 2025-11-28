import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./ContactPage.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { sendEmail } from "../../utils/email";

const ContactPage = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const faqs = [
    { question: "How can I start a project with Design Dynasty?", answer: "You can contact us via the form or email, and our team will get back to you within 24 hours." },
    { question: "Do you provide post-launch support?", answer: "Yes, we offer maintenance and support packages to ensure your project runs smoothly." },
    { question: "Can you handle complex software solutions?", answer: "Absolutely! We specialize in scalable and robust web and mobile applications." }
  ];

  return (<div className="contact-page">
    {/* SEO Meta Tags */} 
    <Helmet>    
        <title>Contact Us | Design Dynasty</title> <meta name="description" content="Get in touch with Design Dynasty for web design, development, and digital solutions. Reach out to our expert team today." /> <meta name="keywords" content="Design Dynasty contact, web development agency Hyderabad, digital solutions contact, email Design Dynasty" /> <link rel="canonical" href="https://yourwebsite.com/contact" />


      {/* Open Graph */}
      <meta property="og:title" content="Contact Design Dynasty" />
      <meta property="og:description" content="Reach out to Design Dynasty for web and digital solutions. Our team is ready to help you innovate and grow." />
      <meta property="og:image" content="https://yourwebsite.com/og-image-contact.png" />
      <meta property="og:url" content="https://yourwebsite.com/contact" />
      <meta property="og:type" content="website" />
    </Helmet>

    {/* Hero */}
    <section className="contact-hero">
      <h1>Get in Touch with Design Dynasty</h1>
      <p>
        Have questions or want to collaborate on your next digital project? Our team is here to help you innovate and grow. Reach out today and let’s create something amazing together.
      </p>
    </section>

    {/* Contact Form */}
    <section className="contact-form-section">
      <div className="contact-container">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="phone" placeholder="Your Phone" />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" rows="6" required />
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <button type="submit" className="contact-btn">Send Message</button>
          {messageSent && <p style={{ color: "green", marginTop: "10px" }}>Message sent successfully!</p>}
        </form>
      </div>
    </section>

    {/* Contact Info */}
    <section className="contact-info-section">
      <h2>Contact Information</h2>
      <div className="contact-info-grid">
        <div className="info-box"><h3>Office Address</h3><p>Lorven Smart Space, Gachibowli, Hyderabad</p></div>
        <div className="info-box"><h3>Email Us</h3><p>designdynastyweb@gmail.com</p></div>
        <div className="info-box"><h3>Call Us</h3><p>+91 9182183823</p><p>+91 9652680796</p></div>
        <div className="info-box">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1JBr5STmsV/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/designdynastysoftwares" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="map-section">
      <h2>Our Location</h2>
      <div className="map-container">
        <iframe
          title="Design Dynasty Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4767!3d17.3753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9cc50e000001%3A0x6d123456789abcd!2sDesign%20Dynasty!5e0!3m2!1sen!2sin!4v1697654321000!5m2!1sen!2sin"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>

    {/* FAQ */}
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <input type="checkbox" id={`faq-${index}`} />
            <label htmlFor={`faq-${index}`}>{item.question}</label>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </div>
        ))}
      </div>
    </section>
  </div>


  );
};

export default ContactPage;
