import React from 'react'
import {
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles';

export default function Footer(props) {
  const classes = useStyles()

  return ( 
    <div className={classes.root}>
      footer here::
      address
      contacts
      social media
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '70vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
}))