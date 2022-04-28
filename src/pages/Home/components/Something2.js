import React from 'react'
import {
  Typography,
  Button,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { lightenDarkenColor } from '../../../utils/util';
import image from '../../../assets/images/4.jpg'

export default function Something(props) {
  const classes = useStyles()

  return (
    <div className={classes.root} id='section4'>
      <div className={classes.container}>          
        <div className={classes.content}>
          <Typography className={classes.title} >
            Featured Product
          </Typography>
          <Typography className={classes.info} >
            We take great pride in knowing our products and the service we provide affect the care of our veterans, active duty military personnel and their families. Our specialized team is here for you.             We take great pride in knowing our products and the service we provide affect the care of our veterans, active duty military personnel and their families. Our specialized team is here for you.
          </Typography>

          <div style={{display: 'flex'}}>
            <Button variant='contained' className={classes.btn}
              endIcon={<ArrowRightAltIcon />}
              size='large'
            >
              View All Products
            </Button>
          </div>
        </div>

        <img src={image} className={classes.image} />
    
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    //minHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: lightenDarkenColor(theme.palette.primary.main, 100),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.up('md')]: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    margin: 'auto',
  },
  container: {
    width: '90%',
    display: 'flex',
    maxWidth: 1800,
  },
  image: {
    maxWidth: '50%'
  },
  content: {
    marginRight: '1rem',
    [theme.breakpoints.up('md')]: {
      marginRight: '2rem',
    },
  },
  title : {
    textAlign: 'left', 
    color: theme.palette.text.primary,
    fontSize: '2rem',
    fontWeight: 'bold',  
    marginBottom: '1rem',  
  },
  divider: {
    borderBottomColor: theme.palette.primary.main,
    width: 50, 
    margin: 'auto', 
    borderBottomWidth: 3,
  },
  info: {
    textAlign: 'left',
    fontSize: '1.2rem',
  },
  btn: {
    marginTop: 20,
    color: 'white',
  }
  
}))