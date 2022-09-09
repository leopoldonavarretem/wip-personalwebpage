//Imports
import "./AboutDescription.css";

//Component Imports
import { Grid } from "@mui/material";

function AboutDescription(props) {
  return (
    <Grid item xl={12}>
      <div className="aboutDescription">
        <h3 className="aboutHeader">About</h3>
        <p className="aboutParagraph">
          I'm currently interested in pursuing a career in project management. I
          always enjoyed developing projects while in college and now I want to
          join the tech industry to launch products and services that will make
          a positive impact on the consumer. From how bussinesses are organized,
          products made and the tools used to create them; I'm constantly
          striving to learn more about the industry.
        </p>

        <p className="aboutParagraph">
          I graduated from the University of California Merced with degrees in
          Political Science & Economics, and a minor in philosophy. However, to
          learn more about the services I want to develop, I chose to learn
          coding and certified myself as a web developer. I'm currently working
          on personal projects and learning new technologies. My tech stack
          includes: React, MongoDb, Express, Node.js, and MySql.
        </p>

        <p className="aboutParagraph">
          During my free time my favorite activity to do is travel. I've visited
          over 230 cities and 13 countries. I enjoy hiking at some of
          California's national parks and San Diego trails. I also have picked
          up the habit of cooking home made meals and watching noire, and horror
          movies.
        </p>
      </div>
    </Grid>
  );
}

export default AboutDescription;
