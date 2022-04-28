import React, { useState } from 'react'
import {
    AppBar,
    IconButton,
    Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import SortIcon from '@mui/icons-material/Sort';
import { useScrollTrigger } from '@mui/material';

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

  return (
    <SolidOnScroll>
      <AppBar className={classes.root} color='transparent' elevation={0}>
        <Toolbar className={classes.appbar}>
          <div className={classes.logo}>
            <img src={logo} className={classes.img}/>
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
  menu: {
    verticalAlign: 'center',
    margin: 'auto',
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  }
}))