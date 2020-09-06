import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
        
 const useStyles = makeStyles((theme) => ({
 root: {
 flexGrow: 1,
 },
 menuButton: {
     marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
},
menuItem: {
    color: 'White',
    fontSize: '18px',
    textDecoration: 'none',
    '&:hover': {
    textDecoration: 'none',
    color: 'lightgray',
 },
    padding: '5px',
    marginRight: '25px',
    },
 }));

const Header = () => {
    const classes = useStyles();
    return (
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Social Buddy
                </Typography>
                <Link href="/posts" className={classes.menuItem}>
                  All Posts
                </Link>
              </Toolbar>
            </AppBar>
          );
        };

export default Header;