//Component Import
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import "./ProjectCard.css"

function ProjectCard(props) {
  const { information } = props;

  return (
    <Grid item xl={4}>
      <Card className="card">
        <CardMedia
          component="img"
          image={information.imageUrl}
          className="image"
        />
        <CardContent>
          <Typography variant="h5">{information.name}</Typography>
          <Typography variant="body2">{information.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
