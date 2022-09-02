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
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";

//Import Icons
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { MenuItem } from "@mui/material";

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <Grid container sx={{backgroundColor:"#659d4b"}}>
      <Grid item xl={4}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ m: 3 }}>Leopoldo Navarrete</Typography>
        </Link>
      </Grid>

      <Grid container item xl={8}>
        <Link to="/portfolio" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ mr: 5, mt:3}}>Portfolio</Typography>
        </Link>

        <Link to="/aboutme" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{mt:3}}>About Me</Typography>
        </Link>

        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ ml: 5, mt:3}}>Contact</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Navbar;

// <AppBar color="primary" position="static">
//   <Container>
//     <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
//       <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//         <Typography color="inherit" variant="title">
//           Leopoldo Navarrete
//         </Typography>
//       </Link>

//       <List component="nav">
//         <ListItem component="div">
//           <ListItemText inset>
//             <Link
//               to="/portfolio"
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               <Typography color="inherit" variant="title">
//                 Portfolio
//               </Typography>
//             </Link>
//           </ListItemText>
//           <ListItemText inset>
//           </ListItemText>
//           <ListItemText inset>
//           </ListItemText>
//         </ListItem>
//       </List>
//     </Toolbar>

//     <Toolbar sx={{ display: { xs: "flex", md: "none" } }}>
//       <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//         <Typography color="inherit" variant="title">
//           Leopoldo Navarrete
//         </Typography>
//       </Link>

//       <List component="nav">
//         <ListItem component="div">
//           <IconButton
//             size="large"
//             aria-label="Open navigation Menu"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//           >
//             <MenuItem onClick={handleCloseNavMenu}>
//               <Link
//                 to="/portfolio"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 <Typography color="inherit" variant="title">
//                   Portfolio
//                 </Typography>
//               </Link>
//             </MenuItem>

//             <MenuItem onClick={handleCloseNavMenu}>
//               <Link
//                 to="/aboutme"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 <Typography color="inherit" variant="title">
//                   About Me
//                 </Typography>
//               </Link>
//             </MenuItem>

//             <MenuItem onClick={handleCloseNavMenu}>
//               <Link
//                 to="/contact"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 <Typography color="inherit" variant="title">
//                   Contact
//                 </Typography>
//               </Link>
//             </MenuItem>
//           </Menu>
//         </ListItem>
//       </List>
//     </Toolbar>
//   </Container>
// </AppBar>
