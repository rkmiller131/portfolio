import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '../DarkThemeContext.jsx';

export default function MuiMediaCard({ project }) {
  const darkMode = useTheme();
  return (
    <Card sx={{
      background: 'transparent',
     }}>
      <CardActionArea>
        <CardMedia
          component="video"
          alt="project prieview video"
          // height="200"
          src={project.src}
          controls
          sx={{
            "@media (max-width: 900px)": {
              height: "120px"
            },
            "@media (max-width: 450px)": {
              height: "100px"
            }
          }}
        />
      </CardActionArea>
      <CardContent
        sx={{
          background: darkMode ? '#3E3744' : '#FAFAFA',
          "@media (max-width: 900px)": {
            padding: "10px"
          },
          "@media (max-width: 450px)": {
            padding: "8px"
          }
        }}
      >
        <Typography
          gutterBottom variant="h5"
          component="div"
          sx={{
            color: darkMode ? '#9b98ca' : '#5e253c',
            fontFamily: 'Jua, sans-serif',
            "@media (max-width: 900px)": {
              fontSize: "1rem"
            },
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
            color: darkMode ? '#9b98ca' : '#5e253c',
            fontFamily: 'Play, sans-serif',
            "@media (max-width: 900px)": {
              fontSize: "0.65rem"
            },
          }}
        >
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={project.github} target="blank">
          <Button size="small" sx={{ color: darkMode ? "#9c7cac" : "#eda0c5", textDecoration: "underline" }}>Github</Button>
        </a>
        {project.link &&
          <a href={project.link} target="blank">
            <Button size="small" sx={{ color: darkMode ? "#9c7cac" : "#eda0c5", textDecoration: "underline" }}>Live Demo</Button>
          </a>
        }
      </CardActions>
    </Card>
  )
}