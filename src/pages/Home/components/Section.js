import React from 'react'
import {
  Typography,
  Divider,
  Grid,
} from '@mui/material'
import { makeStyles } from '@mui/styles';

import Card from './Card'

const list = [
  {
    title: 'Green',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/service1.png',
    time: 1500,
  },
  {
    title: 'Bora Bora',
    description: "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise.",
    image: '/package.png',
    time: 1500,
  },
  {
    title: 'Bla Bla',
    description: "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters.",
    image: '/delivery.png',
    time: 1500,
  },
]

export default function Section(props) {
  const classes = useStyles()

  return (
    <div className={classes.root} id='section3'>
      <div className={classes.container}>
        <h5 className={classes.title}>
          OUR SERVICES
        </h5>
        <Divider variant='middle' className={classes.divider}/>

        <Grid container className={classes.list}>
          {list.map((item, index) => <Card key={index} item={item}/>)}
        </Grid>
        
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
    //width: '70%',
  },
  title : {
    textAlign: 'center', 
    color: theme.palette.text.secondary,
    fontSize: '1.5rem',
    fontWeight: '500',  
    marginBottom: '1rem',  
  },
  divider: {
    borderBottomColor: theme.palette.primary.main,
    width: 50, 
    margin: 'auto', 
    borderBottomWidth: 3,
  },
  list: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
}))