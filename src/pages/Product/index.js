import React, { useEffect, useState } from 'react'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom'

const item = {
    title: 'Clothes & Shoes',
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    image: '/wear.jpg',
    time: 1500,
  }

export default function Product(props) {
  const classes = useStyles()

  const params = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    console.log(params)
    setProduct({title: params?.product})
  }, [])

  if (!params.product)
    return <div></div>

  return ( 
    <div className={classes.root}>
      <Toolbar />

      <div className={classes.container} 
        style={{}} 
        variant='outlined'
      >
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/assets/images/${item?.image}`}
          title={item.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h1'
            className={classes.title}
          >
            {item.title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.desc}
          >
            {item.description}
          </Typography>
        </CardContent>        
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    display: 'flex',
    // maxWidth: 300,
    // minWidth: 250,
    // height: 350,
    margin: 20,
    backgroundColor: 'transparent',
    //border: 'none',
    boxShadow: 'none',
  },
  media: {
    height: 200,
    width: '100%',
  },
  title : {
    fontFamily: 'Nunito', 
    fontWeight: '600',
    marginTop: 0,
    color: theme.palette.text.primary,
    //fontSize: '2rem'
  },
  desc: {
    color: theme.palette.text.secondary,
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  }
}))