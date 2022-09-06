//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";

function ContactForm(props) {
  return (
    <Grid item xl={6}>
      <form action="" className="contactForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label>Message</label>
        <input type="text" id="message" name="message" height="40"/>
        <button type="submit">Submit!</button>
      </form>
    </Grid>
  );
}

export default ContactForm;
