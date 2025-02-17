import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/mrXpk/' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/pratap-mukhiya-655a7325a/' },
    { icon: <TwitterIcon />, url: 'https://x.com/PratapMukhiya5' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/profile.php?id=100090131172400' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'rgba(17, 34, 64, 0.6)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(100, 255, 218, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={2}>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                color="primary"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
          
          <Divider flexItem sx={{ borderColor: 'rgba(100, 255, 218, 0.1)' }} />
          
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Made with
            </Typography>
            <FavoriteIcon
              color="primary"
              sx={{
                fontSize: '1rem',
                animation: 'pulse 1.5s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}
            />
            <Typography variant="body2" color="text.secondary">
              by Pratap Mukhiya
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            © {currentYear} All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
