//MUI Imports
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import HomeDescription from "../components/HomeDescription/HomeDescription";

const containerStyling = {
  height: "90vh",
};

const nameStyling = {
  color: "white",
  marginLeft: "10%",
  mt: 1,
  mb: 1
};

const descriptionStyling = {
  color: "#71767A",
  marginLeft: "10%",
  width: "80%",
};

const nameStyle = {};

function Home(props) {
  return (
    <Grid container sx={containerStyling}>
      <Grid item xl={6}>
        <img src="https://res.cloudinary.com/polomx12/image/upload/c_scale,h_0.8/v1662350925/homePagePhoto_cnwjkn.jpg" alt="" height="650"/>
      </Grid>

      <HomeDescription/>
    </Grid>
  );
}

export default Home;
