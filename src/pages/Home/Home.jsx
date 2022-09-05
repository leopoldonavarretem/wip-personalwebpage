//MUI Imports
import { Grid } from "@mui/material";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import "./Home.css"

const containerStyling = {
  height: "90vh",
};

function Home(props) {
  return (
    <Grid container sx={containerStyling}>
      <Grid item xl={5}>
        <img src="https://res.cloudinary.com/polomx12/image/upload/c_scale,h_0.8/v1662350925/homePagePhoto_cnwjkn.jpg" alt="" height=""/>
      </Grid>

      <HomeDescription/>
    </Grid>
  );
}

export default Home;
