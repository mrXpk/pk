import React, { useState } from 'react'
import { Box, AppBar, Toolbar, Button, useScrollTrigger, Slide, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const sections = ['Home', 'Skills', 'Projects', 'Blog', 'Contact']

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (mobileOpen) {
      handleDrawerToggle()
    }
  }

  const drawer = (
    <List>
      {sections.map((section) => (
        <ListItem button key={section} onClick={() => scrollToSection(section)}>
          <ListItemText primary={section} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
          <Toolbar>
            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
                {sections.map((section) => (
                  <Button
                    key={section}
                    color="primary"
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            background: '#0a192f',
            borderRight: '1px solid rgba(100, 255, 218, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box id="home">
        <Hero />
      </Box>

      <Box id="skills">
        <Skills />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>

      <Box id="blog">
        <Blog />
      </Box>

      <Box id="contact">
        <Contact />
      </Box>

      <Footer />
    </>
  )
}

export default App
