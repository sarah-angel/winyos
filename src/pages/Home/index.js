import React, { useState } from 'react'
import {
    Typography,
    IconButton,
} from '@mui/material'
import { makeStyles } from '@mui/styles';

export default function Home(props) {
  const classes = useStyles()

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  
}))