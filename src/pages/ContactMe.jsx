import { forwardRef } from "react"
import '../styles/contactMe/contactMe.css'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const ContactMe = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="contact">
        <h1 className="title">Contact Me</h1>
        <form action="" className="about-contact">

          <label htmlFor="name">Full Name</label>
          <input type="text" id="name"/>

          <label htmlFor="email">Email</label>
          <input type="text" id="email"/>

          <label htmlFor="accountType">Account Type</label>
          <select name="accountType" id="">
            <option value="">Select an option</option>
            <option value="option1">Business</option>
            <option value="option2">Individual</option>
            <option value="option3">Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>

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
