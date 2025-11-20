import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send message. Try again!");
        }
      );

    e.target.reset(); // reset form after submission
  };

  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>

        <div className="contact-box">
          <h2>Get in Touch</h2>
          <p>If you have any project in mind or just want to say hello, feel free to reach out!</p>

          <form ref={form} onSubmit={sendEmail} className="form">
            <input type="text" name="name" placeholder="Your Name" className="input" required />
            <input type="email" name="email" placeholder="Your Email" className="input" required />
            <textarea name="message" placeholder="Your Message" className="textarea" rows="5" required></textarea>

            <button type="submit" className="contact-btn">Connect</button>
          </form>
        </div>

        {/* Icons */}
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/ruchita-chaudhari-a81681279/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:ruchitachaudhari06@gmail.com" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
