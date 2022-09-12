//Component Import
import { Grid } from "@mui/material";
import "./ProjectCard.css";
import codingIcon from "../../static/codingIcon.png";

function ProjectCard(props) {
  const { information } = props;

  return (
    <Grid item xl={3}>
      <a
        href={information.link}
        target="_blank"
        rel="noopener noreferrer"
        className="projectDiv"
      >
        <img src={codingIcon} alt="" className="projectImage" />
        <h3 className="projectTitle">{information.name}</h3>
        <p className="projectDescription">{information.description}</p>
        <p className="projectTools">{information.tools}</p>
      </a>
    </Grid>
  );
}

export default ProjectCard;
