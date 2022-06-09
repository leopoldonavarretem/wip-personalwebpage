//Imports
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { useState } from "react";

//Import componenets
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";


function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >


                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/portfolio" style={{textDecoration: "none"}}>
                  <Typography textAlign="center" sx={{color: "green"}}>Portfolio</Typography>
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/aboutme" style={{textDecoration: "none"}}>
                  <Typography textAlign="center" sx={{color: "green"}}>About Me</Typography>
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/contact" style={{textDecoration: "none"}}>
                  <Typography textAlign="center" sx={{color: "green"}}>Contact</Typography>
                  </Link>
                </MenuItem>
              
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
