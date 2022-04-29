import React, { useState, useEffect } from 'react'
import {
    Typography,
    Grid,
} from '@mui/material'
import { makeStyles } from '@mui/styles';

import Card from './components/Card'

import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'

//automobile spare
//solar system
//wear foor,clothes
//beauty prod
//homedecor
//phone acc
//computer acc
//home appliances,
//machines

const list = [
  {
    title: 'Clothes & Shoes',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/wear.jpg',
    time: 1500,
  },
  {
    title: 'Home Decor',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/decor.jpeg',
    time: 1500,
  },
  {
    title: 'Beauty Products',
    description: "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters.",
    image: '/beauty.jpg',
    time: 1500,
  },
  {
    title: 'Solar Power',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/solar.jpg',
    time: 1500,
  },
  {
    title: 'Computer Accessories',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/comp_acc.jpeg',
    time: 1500,
  },
  {
    title: 'Home Appliances',
    description: "The Maldives are home to some of the world's most ravishing islands",
    image: '/appliances.jpg',
    time: 1500,
  },
  {
    title: 'Phone accessories',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/phone_acc.png',
    time: 1500,
  },
  {
    title: 'Automobile Spare Parts',
    description: "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise.",
    image: '/auto_spare.jpeg',
    time: 1500,
  },
]

export default function Products(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant='h1' component='h1' className={classes.title}>
          Products
        </Typography>
      </div>
    
      <Grid container className={classes.list}>
        {list.map((item, index) => <Card key={index} item={item}/>)}
      </Grid>

    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minHeight: '50vh',
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title : {
    textAlign: 'center', 
    fontFamily: 'Nunito', 
    fontWeight: 'bold',
    marginTop: 0,
    color: '#fff',
    fontSize: '3.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  expandIcon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
  list: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
}))