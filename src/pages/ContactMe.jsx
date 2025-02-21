import { forwardRef, useRef } from "react"
import '../styles/contactMe/contactMe.css'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com'

export const ContactMe = forwardRef((props, ref) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yg40e3l", // SERVICE ID
      "template_kqnxqvf", // TEMPLATE ID
      form.current,
      "A_-0bPxjCmehlwMrm" // PUBLIC KEY
    )
    .then(
      (result) => {
        console.log("Correo enviado con éxito", result.text);
        alert("Mail sent successfully");
      },
      (error) => {
        console.error("Error al enviar el correo", error);
        alert("There was an error sending the email");
      }
    );

    e.target.reset();
  }

  return (
    <section ref={ref}>
      <div className="contact">

        <h1 className="title">Contact Me</h1>

        <form className="about-contact" ref={form} onSubmit={sendEmail}>

          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required/>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required/>

          <label htmlFor="accountType">Account Type</label>
          <select id="accountType" name="type" required>
            <option value="">Select an option</option>
            <option value="Business">Business</option>
            <option value="Individual">Individual</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button className="button" type="submit">Send</button>

        </form>

        <div style={{ display: "flex", gap: "10px", fontSize: "2rem" }}>
          <a href="https://www.instagram.com/dtossj/" target="_blank" >
            <FaInstagram style={{ color: "#E4405F" }} />
          </a>
          <a href="https://wa.me/56989088185?text=Hola%20quiero%20hacer%20una%20consulta" target="_blank">
            <FaWhatsapp style={{ color: "#25D366" }} />
          </a>
        </div>

      </div>
    </section>
  )
});
