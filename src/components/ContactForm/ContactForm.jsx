//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";

function ContactForm(props) {
  return (
    <Grid item xl={6} xs={12}>
      <form action="" className="contactForm">
        <h3 className="Contact">Email</h3>
        <label for="name">Subject</label>
        <input type="text" id="name" name="name" className="input" />
        <label>Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          className="input"
          rows="4"
        />
        <button type="submit">Send.</button>
      </form>
    </Grid>
  );
}

export default ContactForm;
