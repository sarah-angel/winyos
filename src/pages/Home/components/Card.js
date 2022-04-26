import React from 'react'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import { makeStyles } from '@mui/styles';

export default function ImageCard(props) {
  const classes = useStyles()

  if (!props.item)
    return <div></div>

  return ( 
    <div className={classes.root}>
      <Card className={classes.container} 
        style={{}} 
        variant='outlined'
      >
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/assets/images/${props.item?.image}`}
          title={props.item.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h1'
            className={classes.title}
          >
            {props.item.title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.desc}
          >
            {props.item.description}
          </Typography>
        </CardContent>        
      </Card>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: 300,
    minWidth: 250,
    height: 350,
    margin: 20,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
  media: {
    height: 100,
    width: 100,
    marginTop: '10%',
    margin: 'auto',

    //if image
    //height: 200,
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