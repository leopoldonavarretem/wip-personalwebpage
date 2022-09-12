//Imports components
import { Grid } from "@mui/material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Portfolio.css";

const projectInformation = [
  {
    name: "Personal Webpage",
    imageUrl: "https://picsum.photos/300",
    description:
      "Designed, created and coded my personal webpage. I'm always updating it and upgrading it as my coding abilities become better.",
    tools: "node.js  react",
    link: "https://www.leopoldonavarretem.com/"
  },

  {
    name: "Sharex",
    imageUrl: "https://picsum.photos/300",
    description:
      "A personal project where users can share reviews, opinions on any type of media.",
    tools: "node.js  react  mongoDb",
    link: "https://github.com/leopoldonavarretem/wip-sharex-backend"
  },

  {
    name: "Grassroots",
    imageUrl: "https://picsum.photos/300",
    description:
      "Personal project. A social media platform to organize around social movements in government, bussiness, economy or local issues.",
    tools: "node.js  react  mongoDb",
    link: "https://github.com/leopoldonavarretem/wip-grassroots-backend"
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
