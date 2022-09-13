//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";

function ContactForm(props) {
  return (
    <Grid item xl={6} xs={12}>
      <form
        className="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <label>Email</label>
        <input type="email" id="email" name="email" className="input" />
        <label>Subject</label>
        <input type="text" id="name" name="name" className="input" />
        <label>Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          className="input"
          rows="4"
        />

        <button className="ContactSend" type="submit">
          Send
        </button>
      </form>
    </Grid>
  );
}

export default ContactForm;
