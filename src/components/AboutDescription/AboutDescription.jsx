//Imports
import "./AboutDescription.css";

//Component Imports
import { Grid } from "@mui/material";

function AboutDescription(props) {
  return (
    <Grid item xl={5}>
      <div className="aboutDescription">
        <h3 className="aboutHeader">About</h3>
        <p className="aboutParagraph">
          In the past, I attended University of California Merced, where I
          received a double major in Political Science & Economics and a minor
          in philosophy. Pretty quickly after graduating I realized that the
          political world wasn't the creative outlet or preferred career that I
          was hoping for.
        </p>

        <p className="aboutParagraph">This is the second paragraph</p>

        <p className="aboutParagraph">This is teh third paragraph</p>
      </div>
    </Grid>
  );
}

export default AboutDescription;
