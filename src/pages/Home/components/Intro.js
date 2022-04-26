import React from 'react'
import {
    Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles';

import image from '../../../assets/images/intro.png'

export default function Intro(props) {
  const classes = useStyles()

  return (
    <div className={classes.root} id='introduction'>
      <div className={classes.container}>
        <img src={image} className={classes.imageSm} />

        <Typography variant='h1' className={classes.title}>
          Service-Disabled Veteran-Owned Small Business 
        </Typography>

        <div className={classes.content}>
          <img src={image} className={classes.image} />
          <Typography className={classes.info}>
          Geo-Med, LLC is a verified Service-Disabled Veteran-Owned Small Business (SDVOSB) medical and surgical supplier founded in 2004 by a veteran of the United States Marine Corps. We have partnered with leading manufacturers that share our commitment to client satisfaction to provide a range of medical and surgical products to our Veteran Administration Medical Center and Department of Defense Medical Center customers. We take pride in knowing our products and the service we provide affect the care of our veterans, active duty military personnel, and their families.
          </Typography>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '85%',
      marginTop: 20,
    },
  },
  title : {
    textAlign: 'center', 
    fontFamily: 'Nunito', 
    fontWeight: '600',
    marginTop: 0,
    color: theme.palette.text.primary,
    fontSize: '3rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  content: {
    display: 'flex',
  },
  image: {
    height: 150,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageSm: {
    height: 150,
    marginBottom: '1rem',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  info: {
    color: theme.palette.text.secondary,
    fontSize: '1.2rem',
    textAlign: 'left',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  }
}))