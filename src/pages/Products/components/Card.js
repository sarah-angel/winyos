import React from 'react'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
  const classes = useStyles()

  const navigate = useNavigate()

  const onClick = () => {
    navigate('/products/' + props.item?.title)
  }

  if (!props.item)
    return <div></div>

  return ( 
    <div className={classes.root} onClick={onClick}>
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
    //border: 'none',
    boxShadow: 'none',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  media: {
    height: 200,
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