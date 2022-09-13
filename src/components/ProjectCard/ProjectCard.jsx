//Component Import
import { Grid } from "@mui/material";
import "./ProjectCard.css";
import codingIcon from "../../static/codingIcon.png";

function ProjectCard(props) {
  const { information } = props;

  function isBackEndLinkAvailable(information) {
    if (information.backEndLink) {
      return (
        <a
          href={information.backEndLink}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          Backend
        </a>
      );
    }
  }

  function isFrontEndLinkAvailable(information) {
    if (information.frontEndLink) {
      return (
        <a
          href={information.frontEndLink}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          Frontend
        </a>
      );
    }
  }

  function isWebPageLinkAvailable(information) {
    if (information.webPageLink) {
      return (
        <a
          href={information.webPageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          Webpage
        </a>
      );
    }
  }

  return (
    <Grid item xl={3}>
      <div className="projectDiv">
        <img src={codingIcon} alt="" className="projectImage" />
        <h3 className="projectTitle">{information.name}</h3>
        <p className="projectDescription">{information.description}</p>

        {isWebPageLinkAvailable(information)}
        {isFrontEndLinkAvailable(information)}
        {isBackEndLinkAvailable(information)}
        <p className="projectTools">{information.tools}</p>
      </div>
    </Grid>
  );
}

export default ProjectCard;
