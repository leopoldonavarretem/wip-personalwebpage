//MUI imports
import { Grid } from "@mui/material";

//Component imports
import ContactDescription from "../../components/ContactDescription/ContactDescription";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact(Props) {
  return (
    <Grid Container direction="row">
      <ContactDescription />
      <ContactForm />
    </Grid>
  );
}

export default Contact;
