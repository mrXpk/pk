import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BuildIcon from '@mui/icons-material/Build';
import BrushIcon from '@mui/icons-material/Brush';

const skills = [
  {
    title: 'Frontend Development',
    icon: <WebIcon fontSize="large" />,
    description: 'Building responsive and interactive web applications',
    technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Material-UI', 'Tailwind CSS', 'Redux']
  },
  {
    title: 'Mobile Development',
    icon: <PhoneIphoneIcon fontSize="large" />,
    description: 'Creating cross-platform mobile applications',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management', 'Native APIs', 'Mobile UI/UX']
  },
  {
    title: 'Backend Development',
    icon: <CodeIcon fontSize="large" />,
    description: 'Implementing robust server-side solutions',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'RESTful APIs', 'Authentication', 'Database Design']
  },
  {
    title: 'AI & Machine Learning',
    icon: <SmartToyIcon fontSize="large" />,
    description: 'Exploring and implementing AI solutions',
    technologies: ['Python', 'TensorFlow', 'Neural Networks', 'Computer Vision', 'Natural Language Processing']
  },
  {
    title: 'Tools & Version Control',
    icon: <BuildIcon fontSize="large" />,
    description: 'Using modern development tools and practices',
    technologies: ['Git', 'GitHub', 'VS Code', 'Docker', 'CI/CD', 'Agile Methodology']
  },
  {
    title: 'Creative Skills',
    icon: <BrushIcon fontSize="large" />,
    description: 'Bringing ideas to life through design and editing',
    technologies: ['Video Editing', 'UI Design', 'Figma', 'Adobe Premiere Pro', 'Responsive Design']
  }
];

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Paper
        sx={{
          p: 3,
          height: '100%',
          background: 'rgba(17, 34, 64, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 255, 218, 0.1)'
        }}
      >
        <Box sx={{ color: 'primary.main', mb: 2 }}>
          {skill.icon}
        </Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {skill.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {skill.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skill.technologies.map((tech, idx) => (
            <Typography
              key={idx}
              variant="caption"
              sx={{
                color: 'primary.main',
                bgcolor: 'rgba(100, 255, 218, 0.1)',
                px: 1,
                py: 0.5,
                borderRadius: 1
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          Skills & Expertise
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SkillCard skill={skill} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
