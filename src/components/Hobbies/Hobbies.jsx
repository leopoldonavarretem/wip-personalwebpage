import "./Hobbies.css";

import { Grid } from "@mui/material";

import AdbIcon from '@mui/icons-material/Adb';

function Hobbies(props) {
  return (
    <Grid item xl={7}>
      <Grid container className="hobbiesContainer">
      
      <Grid item xl={6} className="hobbiesBox">
          <AdbIcon className="hobbyIcon" fontSize="large"/>
          <h3 className="hobbyTitle">Cooking</h3>
          <p className="hobbyDescription">Description of the Hobbyfasdfasfasfasdfasdfas fasdfasdf fasdfasf</p>
        </Grid>

        <Grid item xl={6} className="hobbiesBox">
          <AdbIcon className="hobbyIcon" fontSize="large"/>
          <h3 className="hobbyTitle">Cooking</h3>
          <p className="hobbyDescription">Description of the Hobbyfasdfasfasfasdfasdfas fasdfasdf fasdfasf</p>
        </Grid>

        <Grid item xl={6} className="hobbiesBox">
          <AdbIcon className="hobbyIcon" fontSize="large"/>
          <h3 className="hobbyTitle">Cooking</h3>
          <p className="hobbyDescription">Description of the Hobbyfasdfasfasfasdfasdfas fasdfasdf fasdfasf</p>
        </Grid>

        <Grid item xl={6} className="hobbiesBox">
          <AdbIcon className="hobbyIcon" fontSize="large"/>
          <h3 className="hobbyTitle">Cooking</h3>
          <p className="hobbyDescription">Description of the Hobbyfasdfasfasfasdfasdfas fasdfasdf fasdfasf</p>
        </Grid> 
      </Grid>
    </Grid>
  );
}

export default Hobbies;
