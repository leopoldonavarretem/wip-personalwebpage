//Imports
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./HomeDescription.css";

function HomeDescription(props) {
  return (
    <Grid item xl={6}>
      <div className="homeDescription">
        <Typography className="welcome" variant="h1">
          Welcome!
        </Typography>
        <Typography className="name" variant="h6">I'm Leopoldo Navarrete.</Typography>

        <Typography className="description" variant="body1">
          An aspiring tech Project Manager currently looking for work. I
          recently graduated with a double degree in Political Science and
          Economics and certified myself as a Web Developer. However, my true
          passion is planning, developing and shipping products to consumers.
        </Typography>
      </div>
    </Grid>
  );
}

export default HomeDescription;
