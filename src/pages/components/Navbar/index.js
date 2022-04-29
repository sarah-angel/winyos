import React, { useState } from 'react'
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import SortIcon from '@mui/icons-material/Sort';
import { useScrollTrigger } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../../assets/images/winyos.png'

function SolidOnScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    //color: trigger ? 'default' : 'transparent',
  })
}

export default function NavBar(props) {
  const classes = useStyles()

  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <SolidOnScroll>
      <AppBar className={classes.root} color='transparent' elevation={0}>
        <Toolbar className={classes.appbar}>
          <div className={classes.logo}>
            <img src={logo} className={classes.img}/>
          </div>

          <div className={classes.menuLinks} >
            <Link to='/' className={`${classes.menuItem} ${isActive('/') ? classes.menuItemActive : ''}`}>
              <Typography className={classes.menuItemText}>Home</Typography>
            </Link>
            <Link to='/about' className={`${classes.menuItem} ${isActive('/about') ? classes.menuItemActive : ''}`}>
              <Typography className={classes.menuItemText}>About Us</Typography>
            </Link>            
            <Link to='/products' className={`${classes.menuItem} ${isActive('/products') ? classes.menuItemActive : ''}`}>
              <Typography className={classes.menuItemText}>Products</Typography>
            </Link>
            <Link to='/gallery' className={`${classes.menuItem} ${isActive('/gallery') ? classes.menuItemActive : ''}`}>
              <Typography className={classes.menuItemText}>Gallery</Typography>
            </Link>
          </div>
    
          <div style={{margin: 'auto'}}>
            <IconButton className={classes.menu} color='primary' size='large'>
              <SortIcon className={classes.menuIcon} fontSize='large'/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </SolidOnScroll>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.drawer,
    //backgroundColor: 'transparent',
  },
  appbar: {
    display: 'flex',
    //padding: '1em',
    paddingLeft: '2em',
    paddingRight: '2em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
    },
  },
  logo: {
    flex: 1,
    display: 'flex',
    margin: 'auto',
  },
  img: {
    '&:hover': {
      cursor: 'pointer',
    },
    height: 90, 
    paddingTop: '0.5em', 
    paddingBottom: '0.5em',
    [theme.breakpoints.down('sm')]: {
      height: 70,
    },
  },
  menuLinks: {
    flex: 1,
    display: 'flex',
    marginLeft: 20,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menuItem: {
    marginLeft: '1.5rem',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  menuItemActive: {
    '&:after': {
      content: '""',
      display: 'block',
      margin: '0 auto',
      width: '50%',
      borderBottom: '2px solid',
      borderBottomColor: theme.palette.primary.main,
    },
  },
  menuItemText: {
    fontSize: '1.2rem',
    fontWeight: '700',
  },
  menu: {
    verticalAlign: 'center',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  }
}))