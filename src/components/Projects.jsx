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
    status: 'completed',
    category: 'games'
  },
  {
    title: 'X-Weather',
    description: 'A sleek weather forecasting web app with real-time updates, interactive maps, and detailed weather information. Features a modern UI with smooth animations and responsive design.',
    link: 'https://x-weather-iota-five.vercel.app',
    github: 'https://github.com/mrXpk/x-weather',
    tags: ['React', 'Weather API', 'Material-UI', 'Maps Integration'],
    status: 'completed',
    category: 'apps'
  },
  {
    title: 'Space War',
    description: 'An action-packed space shooter game where players defend Earth from alien invasions. Features multiple levels, power-ups, and increasing difficulty.',
    link: 'https://mrxpk.github.io/space-defender-x',
    github: 'https://github.com/mrXpk/space-defender-x',
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Development'],
    status: 'completed',
    category: 'games'
  },
  {
    title: 'Macromail',
    description: 'A modern disposable email service offering instant temporary email addresses. Built with security and privacy in mind, featuring a clean interface and real-time email reception.',
    link: 'https://macromail.vercel.app/',
    github: 'https://github.com/mrXpk/macromail',
    tags: ['Next.js', 'Email API', 'Real-time Updates'],
    status: 'completed',
    category: 'websites'
  },
  {
    title: 'LeafLens',
    description: 'An innovative plant identification app using AI to identify plants from photos. Features detailed plant information, care guides, and community sharing.',
    link: '#',
    github: '#',
    tags: ['Flutter', 'Plant.id API', 'Machine Learning', 'Firebase'],
    status: 'in-progress',
    completion: '70%',
    category: 'apps'
  },
  {
    title: 'Blink',
    description: 'A revolutionary local store delivery platform connecting customers with nearby stores for fast grocery deliveries. Features real-time tracking and automated dispatch.',
    link: '#',
    github: '#',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
    status: 'in-progress',
    completion: '40%',
    category: 'websites'
  },
  {
    title: 'AI Code Assistant',
    description: 'A smart coding assistant that helps developers write better code through AI-powered suggestions and code analysis.',
    link: '#',
    github: '#',
    tags: ['Python', 'Machine Learning', 'NLP', 'VS Code Extension'],
    status: 'planned',
    category: 'apps'
  },
  {
    title: 'EcoTrack',
    description: 'An environmental monitoring system that tracks and visualizes carbon footprint data for individuals and organizations.',
    link: '#',
    github: '#',
    tags: ['React', 'IoT', 'Data Visualization', 'API Integration'],
    status: 'planned',
    category: 'websites'
  },
  {
    title: 'Chronos',
    description: 'A sophisticated time management application featuring a luxurious design. Includes world clock, stopwatch, and timer functionalities with elegant animations and a modern interface.',
    link: 'https://clock-chronos.vercel.app/',
    github: 'https://github.com/mrXpk/chronos',
    tags: ['React', 'Material-UI', 'Framer Motion', 'Time Management'],
    status: 'completed',
    featured: true,
    category: 'apps'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'apps', label: 'Apps' },
  { id: 'games', label: 'Games' },
  { id: 'websites', label: 'Websites' }
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
      whileHover={{ y: -5 }}
      style={{ height: '100%' }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)',
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
          }
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" component="h2" sx={{ 
              fontWeight: 600,
              background: project.featured ? 'linear-gradient(45deg, #64ffda, #00bcd4)' : 'inherit',
              WebkitBackgroundClip: project.featured ? 'text' : 'none',
              WebkitTextFillColor: project.featured ? 'transparent' : 'inherit'
            }}>
              {project.title}
            </Typography>
            <Chip
              label={project.status}
              size="small"
              sx={{
                bgcolor: `${getStatusColor(project.status)}20`,
                color: getStatusColor(project.status),
                borderRadius: '4px',
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
            {project.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(100, 255, 218, 0.1)',
                  color: '#64ffda',
                  mt: 1,
                  '&:hover': {
                    bgcolor: 'rgba(100, 255, 218, 0.2)',
                  }
                }}
              />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          {project.link !== '#' && (
            <Button 
              size="small" 
              endIcon={<LaunchIcon />}
              href={project.link}
              target="_blank"
              sx={{
                color: '#64ffda',
                '&:hover': {
                  bgcolor: 'rgba(100, 255, 218, 0.1)',
                }
              }}
            >
              Live Demo
            </Button>
          )}
          {project.github !== '#' && (
            <Button
              size="small"
              endIcon={<GitHubIcon />}
              href={project.github}
              target="_blank"
              sx={{
                color: '#64ffda',
                '&:hover': {
                  bgcolor: 'rgba(100, 255, 218, 0.1)',
                }
              }}
            >
              Source
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  
  // Sort and filter projects
  const filteredProjects = React.useMemo(() => {
    let filtered = [...projects].sort((a, b) => {
      if (a.status === 'completed' && b.status !== 'completed') return -1;
      if (a.status !== 'completed' && b.status === 'completed') return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    return filtered;
  }, [selectedCategory]);

  const completedProjects = filteredProjects.filter(p => p.status === 'completed').slice(0, 6);
  const remainingProjects = filteredProjects.slice(completedProjects.length);
  const displayedProjects = showAll ? filteredProjects : completedProjects;

  return (
    <Box component="section" py={8}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Here are some things I've built
          </Typography>
        </motion.div>

        {/* Category Filter Buttons */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={() => {
                  setSelectedCategory(category.id);
                  setShowAll(false);
                }}
                variant={selectedCategory === category.id ? "contained" : "outlined"}
                size="large"
                sx={{
                  color: selectedCategory === category.id ? 'black' : '#64ffda',
                  bgcolor: selectedCategory === category.id ? '#64ffda' : 'transparent',
                  borderColor: 'rgba(100, 255, 218, 0.2)',
                  '&:hover': {
                    bgcolor: selectedCategory === category.id ? '#64ffda' : 'rgba(100, 255, 218, 0.1)',
                    borderColor: '#64ffda',
                  },
                  px: 3,
                  py: 1,
                  minWidth: '120px',
                }}
              >
                {category.label}
                {category.id !== 'all' && (
                  <Typography component="span" sx={{ ml: 1, fontSize: '0.8rem', opacity: 0.8 }}>
                    ({projects.filter(p => p.category === category.id && p.status === 'completed').length})
                  </Typography>
                )}
              </Button>
            </motion.div>
          ))}
        </Box>
        
        <Grid container spacing={3}>
          {displayedProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>

        {remainingProjects.length > 0 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 6,
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outlined"
                size="large"
                sx={{
                  color: '#64ffda',
                  borderColor: 'rgba(100, 255, 218, 0.2)',
                  '&:hover': {
                    borderColor: '#64ffda',
                    bgcolor: 'rgba(100, 255, 218, 0.1)',
                  },
                  px: 4,
                  py: 1,
                }}
              >
                {showAll ? 'Show Less' : `See More (${remainingProjects.length})`}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button
                href="https://github.com/mrXpk"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                sx={{
                  color: '#64ffda',
                  borderColor: 'rgba(100, 255, 218, 0.2)',
                  '&:hover': {
                    borderColor: '#64ffda',
                    bgcolor: 'rgba(100, 255, 218, 0.1)',
                  },
                  px: 4,
                  py: 1,
                }}
              >
                More on GitHub
              </Button>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
