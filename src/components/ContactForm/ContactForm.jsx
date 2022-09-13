//MUI Import
import { Grid } from "@mui/material";
import "./ContactForm.css";

function ContactForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contactForm");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <Grid item xl={6} xs={12}>
      <form
        className="contactForm"
        id="contactForm"
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
