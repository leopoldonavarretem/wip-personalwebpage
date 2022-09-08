//Imports
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./HomeDescription.css";

function HomeDescription(props) {
  return (
    <Grid item xl={6}>
      <div className="homeDescription">
        <h1 className="welcome">Welcome!</h1>

        <h2 className="name">I'm Leopoldo Navarrete.</h2>

        <p className="description">
          An aspiring tech Project Manager currently looking for work. I
          recently graduated with a double degree in Political Science and
          Economics and certified myself as a Web Developer. However, my true
          passion is planning, developing and shipping products to consumers.
        </p>
      </div>
    </Grid>
  );
}

export default HomeDescription;
