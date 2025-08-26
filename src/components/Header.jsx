
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';
import Tooltip from '@mui/material/Tooltip';
const Header = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="stikey">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <WorkIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
            <Tooltip title="Whether you're entering the workforce, changing careers, or aiming for the next big role, our intuitive platform helps you craft polished, ATS-friendly resumes that get noticed. Built by a team of designers, developers, and career experts, we're here to support your job search with the tools and guidance you need to succeed." placement="bottom-start">
            <Button sx={{color:'white'}}>About Us</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header