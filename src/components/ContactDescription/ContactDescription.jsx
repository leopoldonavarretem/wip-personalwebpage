//Imports
import { Grid } from "@mui/material";
import githubIcon from "../../static/githubIcon.png";
import emailIcon from "../../static/emailIcon.png";
import linkedIn from "../../static/linkedInIcon.png";
import "./ContactDescription.css";

function ContactDescription(props) {
  return (
    <Grid item xl={6}>
        <h3>Contact</h3>
        <h2>Let's collaborate together!</h2>
        <p>
          Reach me in whichever way you prefer and let me know about how we can
          work together.
        </p>
        <img src={githubIcon} alt="Github Icon" className="icon" />
        <img src={emailIcon} alt="Email Icon" className="icon" />
        <img src={linkedIn} alt="LinkedIn Icon" className="icon" />
    </Grid>
  );
}

export default ContactDescription;
