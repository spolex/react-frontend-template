import React from 'react';
import { Box, Link, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({ 
    root: { 
      flexGrow: 1, 
    }, 
    menuButton: { 
      marginRight: theme.spacing(2), 
    }, 
    title: { 
      flexGrow: 1, 
      display: 'none', 
      [ 
        theme.breakpoints.up('sm')]: { 
          display: 'block', 
      }, 
    }, 
  })); 

function Header() {
    
    const classes = useStyles(); 

// TODO improve this to centralize it
    const navLinks = [
        { title: 'home', path: '/' },
        { title: `dashboard`, path: '/dashboard' },
        { title: `about`, path: '/about' }
      ]

    const links =  navLinks.map((link) => 
    <Box m={0.5}>
    <Link key={link.title} href={link.path} className={classes.navLinks} color='inherit'>
        {link.title}
    </Link >
    </Box>
    )

    return(
    <div className={classes.root}> 
    <AppBar position="static" className={classes.Header}>
        <Toolbar>
        <Typography className={classes.title}>
            This is an APP Bar
        </Typography>
            {links}
        </Toolbar>
    </AppBar>
    </div>
    );
}

export default Header;