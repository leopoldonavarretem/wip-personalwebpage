//MUI Imports
import { Grid } from "@mui/material";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import "./Home.css";
import personalPhoto from "../../static/homePagePhoto.jpg";

const containerStyling = {
  height: "90vh",
};

function Home(props) {
  return (
    <Grid container sx={containerStyling}>
      <Grid item xl={6} xs={12} className="mama">
        <img src={personalPhoto} alt="" />
      </Grid>

      <HomeDescription />
    </Grid>
  );
}

export default Home;
