import React from "react";
import "./ApproachFormPopup.css";

const ApproachFormPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Approach Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default ApproachFormPopup;
