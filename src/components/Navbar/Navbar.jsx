//Imports
import { Link } from "react-router-dom";

//Import componenets
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./Navbar.css";

const navigationBarDirection = {
  alignItems: "center",
  direction: "row",
  justifyContent: "space-around",
};

function Navbar(props) {
  return (
    <Grid container className="navBar">
      <Grid container item xl={4} {...navigationBarDirection}>
        <Link to="/" className="titleLink">
          <Typography>Leopoldo Navarrete</Typography>
        </Link>
      </Grid>

      <Grid container item xl={3}></Grid>

      <Grid container item xl={4} {...navigationBarDirection}>
        <Link to="/portfolio" className="navigationLink">
          Portfolio
        </Link>

        <Link to="/about" className="navigationLink">
          About Me
        </Link>

        <Link to="/contact" className="navigationLink">
          Contact
        </Link>

        <a
          href="https://drive.google.com/file/d/1NIzkVj79deXfcKEz-0k8cjGPGrv1pA8P/view?usp=sharing"
          className="navigationLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </Grid>
    </Grid>
  );
}

export default Navbar;
