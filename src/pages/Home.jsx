//MUI Imports
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const containerStyling = {
  height: "90vh",
};

const welcomeStyle = {
  color: "#6719FF",
  marginLeft: "10%",
  marginTop: "30%",
  width: "80%"
};

const nameStyling = {
  color: "white",
  marginLeft: "10%",
  width: "80%",
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
        <img src="https://res.cloudinary.com/polomx12/image/upload/c_scale,h_0.8/v1662350925/homePagePhoto_cnwjkn.jpg" alt="" width="100%" />
      </Grid>

      <Grid item xl={6}>
        <Typography sx={welcomeStyle} variant="h1">
          Welcome!
        </Typography>
        <Typography sx={nameStyling} variant="h6">
          I'm Leopoldo Navarrete.
        </Typography>

        <Typography sx={descriptionStyling} variant="body1">
          An aspiring tech Project Manager currently looking for work. I
          recently graduated with a double degree in Political Science and
          Economics and certified myself as a Web Developer. However, my true
          passion is planning, developing and shipping products to consumers.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
