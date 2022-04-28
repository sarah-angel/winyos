import React from 'react'
import {
  Divider,
  IconButton,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const partners = [
  {
    name: '',
    image: '/partner7.png',
  },
  {
    name: '',
    image: '/partner8.png',
  },
  {
    name: '',
    image: '/partner3.jpg',
  },
  {
    name: '',
    image: '/partner4.png',
  },
  {
    name: '',
    image: '/partner5.png',
  },
]

function xBackArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "red" }}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </div>
  );
}

export default function Partners(props) {
  const classes = useStyles()

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // centerMode: true,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  }

  return (
    <div className={classes.root} id='partners'>
      <div className={classes.container}>
        <h5 className={classes.title}>
          OUR PARTNERS
        </h5>
        <Divider variant='middle' className={classes.divider}/>

        <Slider {...sliderSettings} className={classes.slider}>
          {partners.map((item, index) =>
            <div key={index}>
              <img className={classes.image}
                src={`${process.env.PUBLIC_URL}/assets/images/${item.image}`} 
              />
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}

const PrevArrow = (props) => {
  const classes = useStyles()

  const { style, onClick } = props;
  return (
    <IconButton
      className={classes.prevArrow}
      style={style}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </IconButton>
  );
}

const NextArrow = (props) => {
  const classes = useStyles()

  const { style, onClick } = props;
  return (
    <IconButton
      className={classes.nextArrow}
      style={style}
      onClick={onClick}
    >
      <ChevronRightIcon />
    </IconButton>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    //minHeight: '80vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.up('md')]: {
      paddingTop: 80,
    },
    maxWidth: 2000,
    margin: 'auto',
  },
  container: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
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
  slider: {
    marginTop: 80,
    marginBottom: 20,
  },
  image: {
    height: 160,
    maxWidth: 210,
    margin: 'auto',
    padding: 10,
    objectFit: 'contain',
  },
  prevArrow: {
    position: 'absolute',
    top: '50%',
    display: 'block',
    padding: 5,
    '-webkit-transform': 'translate(0, -50%)',
    '-ms-transform': 'translate(0, -50%)',
    transform: 'translate(0, -50%)',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    left: -40,
  },
  nextArrow: {
    position: 'absolute',
    top: '50%',
    display: 'block',
    padding: 5,
    '-webkit-transform': 'translate(0, -50%)',
    '-ms-transform': 'translate(0, -50%)',
    transform: 'translate(0, -50%)',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    right: -40,
  },
}))