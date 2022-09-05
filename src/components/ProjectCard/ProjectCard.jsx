//Component Import
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

function ProjectCard(props) {
return(
  <Grid item xl={4} alignItems="center">
  
    <Card>
      <CardMedia
        component="img"
        height={300}
        image="https://picsum.photos/200/300"
      />
      <CardContent>
        <Typography variant="h5">Personal Webpage</Typography>
        <Typography variant="body2">
          Designed, created and coded my personal webpage. I'm always updating
          it and upgrading it as my coding abilities become better.
        </Typography>
      </CardContent>
    </Card>
  </Grid>

)

}

export default ProjectCard;

