//Imports
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { useState } from "react";

//Import componenets
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Navbar(props) {
  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="xl">
        <Toolbar>
        <Link to="/" style={{textDecoration: "none", color:"white"}}>
                <Typography color="inherit" variant="title">
                  Leopoldo Navarrete
                </Typography>
              </Link>

          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
              <Link to="/portfolio" style={{textDecoration: "none", color:"white"}}>
                <Typography color="inherit" variant="title">
                  Portfolio
                </Typography>
              </Link>
              </ListItemText>
              <ListItemText inset>
              <Link to="/aboutme" style={{textDecoration: "none", color:"white"}}>
                <Typography color="inherit" variant="title">
                  About Me
                </Typography>
              </Link>
              </ListItemText>
              <ListItemText inset>
              <Link to="/contact" style={{textDecoration: "none", color:"white"}}>
                <Typography color="inherit" variant="title">
                  Contact
                </Typography>
              </Link>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
