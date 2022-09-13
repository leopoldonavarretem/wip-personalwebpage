//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";

function ContactForm(props) {

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <Grid item xl={6} xs={12}>
      <form
        className="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <label className="contactLabel">Email</label>
        <input type="email" id="email" name="email" className="contactInput" />
        <label className="contactLabel">Subject</label>
        <input type="text" id="name" name="name" className="contactInput" />
        <label className="contactLabel">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          className="contactMessage"
          rows="4"
        />

        <button className="contactSend" type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </Grid>
  );
}

export default ContactForm;
