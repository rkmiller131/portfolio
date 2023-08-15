import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MuiMediaCard({ project }) {
  return (
    <Card sx={{
      maxWidth: 375,
      background: 'transparent',
      "@media (max-width: 600px)": {
        display: "none"
      },
     }}>
      <CardActionArea>
        <CardMedia
          component="video"
          alt="project prieview video"
          height="200"
          src={project.src}
          autoPlay
          controls
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  )
}