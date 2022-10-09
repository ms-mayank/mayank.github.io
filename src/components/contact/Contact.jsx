import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3ljvego", "template_0uu63mv", form.current, "1YKp-7XzB62APMADF").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>msmayank555@gmail.com</h5>
            <a href="mailto:msmayanak555@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          {/* <article className="contact__option">
            <AiOutlineMessage className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="mailto:msmayanak555@gmail.com" target="_blank">
              Send a Message
            </a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7309261819</h5>
            <a href="https://api.whatsapp.com?phone=+917309261819" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
