//Imports components
import { Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const projectInformation = [
  {
    name: "Personal Webpage",
    imageUrl: "https://picsum.photos/300",
    description:
      "Designed, created and coded my personal webpage. I'm always updating it and upgrading it as my coding abilities become better.",
  },

  {
    name: "Sharex",
    imageUrl: "https://picsum.photos/300",
    description:
      "A personal project where users can share reviews, opinions on any type of media.",
  },

  {
    name: "Grassroots",
    imageUrl: "https://picsum,photos/300",
    description:
      "Personal project. A social media platform to organize around social movements in government, bussiness, economy or local issues.",
  },
];

function Portfolio(props) {
  return (
    <Grid container>
      <ProjectCard />
    </Grid>
  );
}

export default Portfolio;
