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
      "@media (max-width: 900px)": {
        height: "fit-content"
      },
      "@media (max-width: 450px)": {
        maxWidth: 290
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
          sx={{
            "@media (max-width: 450px)": {
              height: "100px"
            }
          }}
        />
      </CardActionArea>
      <CardContent
        sx={{
          "@media (max-width: 450px)": {
            padding: "8px"
          }
        }}
      >
        <Typography
          gutterBottom variant="h5"
          component="div"
          sx={{
            color: '#FAFAFA',
            fontFamily: 'Play, sans-serif',
            "@media (max-width: 450px)": {
              fontSize: "1rem"
            },
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: '#FAFAFA',
            fontFamily: 'JUA, sans-serif',
            "@media (max-width: 450px)": {
              fontSize: "0.65rem"
            },
          }}
        >
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#eda0c5", textDecoration: "underline" }}>Github</Button>
      </CardActions>
    </Card>
  )
}