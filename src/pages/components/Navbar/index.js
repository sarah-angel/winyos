import React, { useState } from 'react'
import {
    Typography,
    AppBar,
    IconButton,
    Toolbar
} from '@mui/material'
import { makeStyles } from '@mui/styles';

export default function NavBar(props) {
  const classes = useStyles()

  return (
    <AppBar>
      <div>
        navbarrrrrrr
      </div>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  main: {
    display: 'flex',
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      margin: 10,
    }
  },
  drawerContent: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  content: {
    flex: 1,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 20,
    }
  }
}))