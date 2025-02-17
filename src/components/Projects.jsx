import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'AI TIC-TAC-TOE',
    description: 'An intelligent tic-tac-toe game featuring an unbeatable AI opponent using the minimax algorithm. Challenge yourself against different difficulty levels and improve your strategic thinking.',
    link: 'https://ai-tictactoe-game.vercel.app',
    github: 'https://github.com/mrXpk/ai-tictactoe-game',
    tags: ['React', 'AI Algorithm', 'Game Development'],
    status: 'completed'
  },
  {
    title: 'X-Weather',
    description: 'A sleek weather forecasting web app with real-time updates, interactive maps, and detailed weather information. Features a modern UI with smooth animations and responsive design.',
    link: 'https://x-weather-iota-five.vercel.app',
    github: 'https://github.com/mrXpk/x-weather',
    tags: ['React', 'Weather API', 'Material-UI', 'Maps Integration'],
    status: 'completed'
  },
  {
    title: 'Space War',
    description: 'An action-packed space shooter game where players defend Earth from alien invasions. Features multiple levels, power-ups, and increasing difficulty.',
    link: 'https://mrxpk.github.io/space-defender-x',
    github: 'https://github.com/mrXpk/space-defender-x',
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Development'],
    status: 'completed'
  },
  {
    title: 'Macromail',
    description: 'A modern disposable email service offering instant temporary email addresses. Built with security and privacy in mind, featuring a clean interface and real-time email reception.',
    link: 'https://macromail.vercel.app/',
    github: 'https://github.com/mrXpk/macromail',
    tags: ['Next.js', 'Email API', 'Real-time Updates'],
    status: 'completed'
  },
  {
    title: 'LeafLens',
    description: 'An innovative plant identification app using AI to identify plants from photos. Features detailed plant information, care guides, and community sharing.',
    link: '#',
    github: '#',
    tags: ['Flutter', 'Plant.id API', 'Machine Learning', 'Firebase'],
    status: 'in-progress',
    completion: '70%'
  },
  {
    title: 'Blink',
    description: 'A revolutionary local store delivery platform connecting customers with nearby stores for fast grocery deliveries. Features real-time tracking and automated dispatch.',
    link: '#',
    github: '#',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
    status: 'in-progress',
    completion: '40%'
  },
  {
    title: 'AI Code Assistant',
    description: 'A smart coding assistant that helps developers write better code through AI-powered suggestions and code analysis.',
    link: '#',
    github: '#',
    tags: ['Python', 'Machine Learning', 'NLP', 'VS Code Extension'],
    status: 'planned'
  },
  {
    title: 'EcoTrack',
    description: 'An environmental monitoring system that tracks and visualizes carbon footprint data for individuals and organizations.',
    link: '#',
    github: '#',
    tags: ['React', 'IoT', 'Data Visualization', 'API Integration'],
    status: 'planned'
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return '#4caf50';
      case 'in-progress':
        return '#ff9800';
      case 'planned':
        return '#2196f3';
      default:
        return '#64ffda';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'rgba(17, 34, 64, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 255, 218, 0.1)',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.2)',
            color: getStatusColor(project.status),
            fontSize: '0.75rem',
            textTransform: 'capitalize'
          }}
        >
          {project.status} {project.completion && `(${project.completion})`}
        </Box>
        
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" color="primary" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {project.description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {project.tags.map((tag, idx) => (
              <Chip 
                key={idx} 
                label={tag} 
                size="small" 
                sx={{ 
                  background: 'rgba(100, 255, 218, 0.1)',
                  color: 'primary.main'
                }}
              />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          {project.link !== '#' && (
            <Button 
              size="small" 
              color="primary" 
              href={project.link}
              target="_blank"
              endIcon={<LaunchIcon />}
            >
              Live Demo
            </Button>
          )}
          {project.github !== '#' && (
            <Button
              size="small"
              color="primary"
              href={project.github}
              target="_blank"
              endIcon={<GitHubIcon />}
            >
              Source Code
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          Featured Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
