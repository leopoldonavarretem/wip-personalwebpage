//Imports
import { Link } from "react-router-dom";

//Import componenets
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
          Leopoldo Navarrete
        </Link>
      </Grid>

      <Grid container item xl={3}></Grid>

      <Grid container item xl={4} {...navigationBarDirection}>
        <Link to="/portfolio" className="navigationLink">
          Portfolio
        </Link>

        <Link to="/about" className="navigationLink">
          About
        </Link>

        <Link to="/contact" className="navigationLink">
          Contact
        </Link>

        <a
          href="https://drive.google.com/file/d/1hkEVLZ3u5wDI2rJSs7z16xMJoiNQX6CT/view?usp=sharing"
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
