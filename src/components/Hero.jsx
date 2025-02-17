import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/mrXpk/' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/pratap-mukhiya-655a7325a/' },
    { icon: <TwitterIcon />, url: 'https://x.com/PratapMukhiya5' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/profile.php?id=100090131172400' },
  ];

  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(10,25,47,0) 0%, rgba(10,25,47,0.5) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(100,255,218,0.1) 0%, rgba(10,25,47,0) 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} maxWidth="800px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="overline" 
              color="primary"
              sx={{ 
                fontSize: '1.1rem',
                letterSpacing: '0.2em',
                fontWeight: 500,
                mb: 2,
                display: 'block'
              }}
            >
              Hi, I'm
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(45deg, #64ffda 30%, #63f5ff 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Pratap aka Mr.X
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              color="text.secondary"
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 3
              }}
            >
              16 y/o high school student, entrepreneur, developer, & enthusiast
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 4,
                maxWidth: '600px'
              }}
            >
              I specialize in building websites, flutter apps and video editing. 
              With a passion for science fiction and a bold vision to help humanity 
              become a Type 2 civilization in my lifetime.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    color="primary"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: '2px solid',
                      borderColor: 'primary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      }
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Stack>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <IconButton
            onClick={scrollToSkills}
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
              }
            }}
          >
            <KeyboardArrowDownIcon color="primary" />
          </IconButton>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
