import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Blog = () => {
  return (
    <Box sx={{ py: 8, minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper 
            sx={{ 
              p: 4,
              background: 'rgba(17, 34, 64, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 255, 218, 0.1)',
              textAlign: 'center'
            }}
          >
            <Stack spacing={3} alignItems="center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <RocketLaunchIcon 
                  sx={{ 
                    fontSize: '4rem',
                    color: 'primary.main'
                  }} 
                />
              </motion.div>

              <Typography variant="h4" component="h2" color="primary">
                Blog Launch Imminent
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                Exciting content is on its way! Soon, I'll be sharing my thoughts on technology, 
                development experiences, and the journey towards making humanity a Type 2 civilization.
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="primary" fontStyle="italic">
                  Stay tuned for insights on:
                </Typography>
                <Stack 
                  direction="row" 
                  spacing={2} 
                  justifyContent="center" 
                  flexWrap="wrap"
                  sx={{ mt: 2 }}
                >
                  {['AI & ML', 'Web Development', 'Flutter Apps', 'Space Technology', 'Future Tech'].map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Paper
                        sx={{
                          px: 2,
                          py: 1,
                          background: 'rgba(100, 255, 218, 0.1)',
                          border: '1px solid rgba(100, 255, 218, 0.2)',
                        }}
                      >
                        <Typography color="primary">
                          {topic}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blog;
