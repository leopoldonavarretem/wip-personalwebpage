//Imports

//Import components
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const theme={
  color: "white"
}

function Aboutme(props) {
  return (
    <Container maxWidth="xl" sx={theme}>
      <Typography variant="h1" align="center">
        Hi there! My name is Leopoldo Navarrete!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} m={1}>
          <Typography variant="body1" mb={1}>
            I'm a front-end developer from the United States!FASDF
          </Typography>

          <Typography variant="body1" mb={1}>
            In the past, I attended University of California Merced, where I
            received a double major in Political Science & Economics and a minor
            in philosophy. Pretty quickly after graduating I realized that the
            political world wasn't the creative outlet or preferred career that
            I was hoping for.
          </Typography>
          <Typography variant="body1">
            I decided to join Ironhack's bootcamp to become a web developer. I
            became porfficient with the MongoDB, Express, React.js and Node.js
            stack.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Aboutme;

//TODO: Add hobbies, interests, Images etc...
