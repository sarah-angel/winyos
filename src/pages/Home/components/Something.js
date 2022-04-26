import React from 'react'
import {
  Typography,
  Button,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Card from './Card'
import image from '../../../assets/images/4.jpg'

function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

export default function Something(props) {
  const classes = useStyles()

  return (
    <div className={classes.root} id='section4'>
      <div className={classes.container}>
        {/* <h5 className={classes.title}>
          OUR SERVICES
        </h5>
        <Divider variant='middle' className={classes.divider}/>
         */}

        <img src={image} className={classes.image} />
          
        <div className={classes.content}>
          <Typography className={classes.title} >
            Customer Service
          </Typography>
          <Typography className={classes.info} >
            We take great pride in knowing our products and the service we provide affect the care of our veterans, active duty military personnel and their families. Our specialized team is here for you.             We take great pride in knowing our products and the service we provide affect the care of our veterans, active duty military personnel and their families. Our specialized team is here for you.
          </Typography>

          <div style={{display: 'flex'}}>
            <Button variant='contained' className={classes.btn}
              endIcon={<ArrowRightAltIcon />}
              size='large'
            >
              Contact Us
            </Button>
          </div>
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
    backgroundColor: LightenDarkenColor(theme.palette.primary.main, 100),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  container: {
    width: '90%',
    display: 'flex',
  },
  image: {
    maxWidth: '50%'
  },
  content: {
    marginLeft: '1rem',
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