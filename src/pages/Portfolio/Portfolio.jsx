//Imports components
import { Grid } from "@mui/material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Portfolio.css";

const projectInformation = [
  {
    name: "Personal Webpage",
    description:
      "Designed, created and coded my personal webpage. I'm always updating it and upgrading it as my coding abilities become better.",
    tools: "node.js  react",
    link: "https://www.leopoldonavarretem.com/",
    frontEndLink: "https://github.com/leopoldonavarretem/wip-personalwebpage",
    backEndLink: null,
    webPageLink: "https://leopoldonavarretem.com",
  },

  {
    name: "Sharex",
    description:
      "A social media platform where users can share reviews and opinions on any type of popular entertainment.",
    tools: "node.js  react  mongoDb",
    link: "https://github.com/leopoldonavarretem/wip-sharex-backend",
    frontEndLink: "https://github.com/leopoldonavarretem/wip-sharex-backend",
    backEndLink: "https://github.com/leopoldonavarretem/wip-sharex-backend",
    webPageLink: null,
  },

  {
    name: "Grassroots",
    description:
      "A platform to organize around social movements in government, bussiness, economy or local issues.",
    tools: "node.js  react  mongoDb",
    link: "https://github.com/leopoldonavarretem/wip-grassroots-backend",
    frontEndLink: "https://github.com/leopoldonavarretem/wip-grassroots-frontend",
    backEndLink: "https://github.com/leopoldonavarretem/wip-grassroots-backend",
    webPageLink: null,
  },
];

function Portfolio(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <ProjectCard information={projectInformation[0]} />
      <ProjectCard information={projectInformation[1]} />
      <ProjectCard information={projectInformation[2]} />
    </Grid>
  );
}

export default Portfolio;
