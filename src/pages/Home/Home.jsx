//MUI Imports
import { Grid } from "@mui/material";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import "./Home.css";

const containerStyling = {
  height: "90vh",
};

function Home(props) {
  return (
    <Grid container sx={containerStyling}>
      <Grid item xl={6} xs={12}>
        <img src="https://res.cloudinary.com/deb9nxmmh/image/upload/v1663003425/Personal%20Website/homePagePhoto_nmsqbm.jpg" alt="" className="homeImage"/>
      </Grid>

      <HomeDescription />
    </Grid>
  );
}

export default Home;
