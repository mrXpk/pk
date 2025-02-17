import React from 'react';
import { Box, Container, Typography, Paper, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  const socialLinks = [
    { 
      icon: <GitHubIcon fontSize="large" />, 
      url: 'https://github.com/mrXpk/',
      label: 'GitHub'
    },
    { 
      icon: <LinkedInIcon fontSize="large" />, 
      url: 'https://www.linkedin.com/in/pratap-mukhiya-655a7325a/',
      label: 'LinkedIn'
    },
    { 
      icon: <TwitterIcon fontSize="large" />, 
      url: 'https://x.com/PratapMukhiya5',
      label: 'Twitter'
    },
    { 
      icon: <FacebookIcon fontSize="large" />, 
      url: 'https://www.facebook.com/profile.php?id=100090131172400',
      label: 'Facebook'
    }
  ];

  return (
    <Box sx={{ py: 8, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h2" gutterBottom color="primary" textAlign="center">
            Get In Touch
          </Typography>

          <Paper 
            sx={{ 
              p: 4, 
              mt: 4,
              background: 'rgba(17, 34, 64, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 255, 218, 0.1)'
            }}
          >
            <Stack spacing={3} alignItems="center">
              <Typography variant="body1" color="text.secondary" textAlign="center">
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Typography variant="body1" component="a" href="mailto:pkdotss@gmail.com" 
                  sx={{ 
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  pkdotss@gmail.com
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      color="primary"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      sx={{ 
                        '&:hover': { 
                          backgroundColor: 'rgba(100, 255, 218, 0.1)' 
                        }
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
