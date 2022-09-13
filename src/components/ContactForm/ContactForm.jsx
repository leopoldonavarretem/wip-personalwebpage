//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";

function ContactForm(props) {
  return (
    <Grid item xl={6} xs={12}>
      <form className="contactForm" name="contact" method="post">
        <input type="hidden" name="contact-form" value="contact" />

        <label className="contactLabel" htmlFor="fullName">
          Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="contactInput"
        />

        <label className="contactLabel" htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" className="contactInput" />

        <label className="contactLabel" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="contactInput"
        />

        <label className="contactLabel" htmlFor="message">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          className="contactMessage"
          rows="4"
        />

        <button className="contactSend" type="submit">
          Send
        </button>
      </form>
    </Grid>
  );
}

export default ContactForm;
