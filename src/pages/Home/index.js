import React, { useState, useEffect } from 'react'
import {
    Typography,
    IconButton,
    Collapse,
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll'

import Intro from './components/Intro'
import Section from './components/Section'
import Something from './components/Something'
import Something2 from './components/Something2'
import Something3 from './components/Something3'
import Partners from './components/Partners'

import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'

export default function Home(props) {
  const classes = useStyles()

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000} : {})}
          collapsedSize={50}
        >
          <Typography variant='h1' component='h1' className={classes.title}>
            Customer Service. <br />
            Product Quality. <br />
            Business Integrity.
          </Typography>

          <Scroll to='introduction' smooth={true}>
            <IconButton color='primary' size='large'>
              <ExpandMoreIcon className={classes.expandIcon} fontSize='large' />
            </IconButton>
          </Scroll>
        </Collapse>
      </div>

      <Intro />
      <Section />
      <Something />
      <Something2 />
      <Something3 />
      <Partners />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minHeight: '100vh',
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
  }
}))