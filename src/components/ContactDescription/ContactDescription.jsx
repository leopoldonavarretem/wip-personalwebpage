//Imports
import { Grid } from "@mui/material";
import githubIcon from "../../static/githubIcon.png";
import emailIcon from "../../static/emailIcon.png";
import linkedIn from "../../static/linkedInIcon.png";
import "./ContactDescription.css";

function ContactDescription(props) {
  return (
    <Grid item xl={6} xs={12} md={12}>
      <div className="contactDescription">
        <h3>Contact</h3>
        <h2>Let's collaborate together!</h2>
        <p>
          Reach me in whichever way you prefer and let me know about how we can
          work together.
        </p>
        <div className="iconsDiv">
          <a href="https://github.com/leopoldonavarretem">
            <img src={githubIcon} alt="Github Icon" className="icon" />
          </a>
          <a href="mailto:Leopoldonavarretem@outlook.com">
            <img src={emailIcon} alt="Email Icon" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/leopoldonavarretem/">
            <img src={linkedIn} alt="LinkedIn Icon" className="icon" />
          </a>
        </div>
      </div>
    </Grid>
  );
}

export default ContactDescription;
