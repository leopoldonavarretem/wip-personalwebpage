//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";
import { useState } from "react";

function ContactForm(props) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const href = `mailto:Leopoldonavarretem@outlook.com?subject=${subject}&Body=${message}`;

  function handleSubjectChange(event) {
    return setSubject(event.target.value);
  }

  function handleMessageChange(event) {
    return setMessage(event.target.value);
  }

  return (
    <Grid item xl={6} xs={12}>
      <form className="contactForm">
        <h3 className="email">Email</h3>
        <label>Subject</label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          onChange={handleSubjectChange}
        />
        <label>Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          className="input"
          rows="4"
          onChange={handleMessageChange}
        />

        <a href={href} className="ContactSend">
          Send
        </a>
      </form>
    </Grid>
  );
}

export default ContactForm;
