//Imports
import AboutDescription from "../../components/AboutDescription/AboutDescription";
import Hobbies from "../../components/Hobbies/Hobbies";

//Import components
import { Grid } from "@mui/material";

function About(props) {
  return (
    <Grid container>
      <AboutDescription />
      <Hobbies />
      <Hobbies/>
    </Grid>
  );
}

export default About;
