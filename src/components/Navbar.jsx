//Imports
import { Link } from "react-router-dom";

//Import componenets
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//Styling
const navigationLinkStyling = {
  textDecoration: "none",
  color: "white",
};

const titleLinkStyling = {
  textDecoration: "none",
  color: "white",
};

const navBarStyle = {
  backgroundColor: "black",
  height: "10vh",
};

const navigationBarDirection = {
  alignItems: "center",
  direction: "row",
  justifyContent: "space-around",
};

function Navbar(props) {
  return (
    <Grid container sx={navBarStyle}>
      <Grid container item xl={4} {...navigationBarDirection}>
        <Link to="/" style={titleLinkStyling}>
          <Typography>Leopoldo Navarrete</Typography>
        </Link>
      </Grid>

      <Grid container item xl={3}></Grid>

      <Grid container item xl={4} {...navigationBarDirection}>
        <Link to="/portfolio" style={navigationLinkStyling}>
          <Typography>Portfolio</Typography>
        </Link>

        <Link to="/aboutme" style={navigationLinkStyling}>
          <Typography>About Me</Typography>
        </Link>

        <Link to="/contact" style={navigationLinkStyling}>
          <Typography>Contact</Typography>
        </Link>
        <Typography style={navigationLinkStyling}>Resume</Typography>
      </Grid>
    </Grid>
  );
}

export default Navbar;
