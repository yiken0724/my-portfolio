// import React from "react";
// import "../pages/ContactMe.css"; // Add this import to link the styles

// function ContactForm() {
//   return (
//     <div className="form-container">
        
//     </div>
//   )
// }

// export default ContactForm


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../pages/ContactMe.css";

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    if (!name || !email || !subject || !message) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");

    emailjs
      .sendForm("service_m8xc8bg", "template_sm7ym6p", form.current, {
        publicKey: "XgdhgTnVk1FpLn99W",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed to send the message. Please try again.");
        }
      );
  };

  const closePopup = () => {
    setIsSent(false);
  };

  return (
    <div className="contact-container">
        <h1>Send a Message</h1>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Your name..."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="Your email..."
          />
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject">
            <option value="">Select one...</option>
            <option value="general">General Inquiry</option>
            <option value="collaboration">Project Collaboration</option>
            <option value="feedback">Feedback on Portfolio</option>
            <option value="networking">Networking</option>
            <option value="tech-question">Technical Question</option>
            <option value="other">Others</option>
          </select>
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Please type in your message..."
          />
          <button type="submit" value="Send">
            Send
          </button>
        </form>

      {isSent && (
        <div className="popup">
          <div className="popup-content">
            <p>Your message has been successfully sent!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;