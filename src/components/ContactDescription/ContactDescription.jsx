//Imports
import { Grid } from "@mui/material";
import githubIcon from "../../static/githubIcon.png";
import emailIcon from "../../static/emailIcon.png";
import linkedIn from "../../static/linkedInIcon.png";
import "./ContactDescription.css";

function ContactDescription(props) {
  return (
    <Grid item xl={6}>
      <div className="ContactBlock">
        <h3 className="Contact">Contact</h3>
        <h2 className="ContactTitle">Let's collaborate together!</h2>
        <p className="ContactDescription">
          Reach me in whichever way you prefer and let me know about how we can
          work together.
        </p>
        <div className="iconsDiv">
          <a href="https://github.com/leopoldonavarretem" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Icon" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/leopoldonavarretem/" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn Icon" className="icon" />
          </a>
          <a href="mailto:Leopoldonavarretem@outlook.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email Icon" className="icon" />
          </a>
        </div>
      </div>
    </Grid>
  );
}

export default ContactDescription;
