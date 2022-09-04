//MUI Imports
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const white = {
  color: "white",
};

const welcomeStyle = {
  color: "#6719FF",
};

function Home(props) {
  return (
    <Grid container>
      <Grid item xl={6}>
        Hello
      </Grid>

      <Grid
        item
        xl={6}
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Typography sx={welcomeStyle} variant="h1">
          Welcome!
        </Typography>
        <Typography sx={white} variant="h6">
          I'm Leopoldo Navarrete
        </Typography>

        <Typography sx={white} variant="body1">
          An aspiring tech Project Manager currently looking for work. I
          recently graduated with a double degree in Political Science and
          Economics; and certified myself as a Web Developer. However, my true
          passion is planning, developing and shipping products to consumers.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
