import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    padding: '.7em',
    minWidth: '200px',
    maxWidth: '300px',
    marginTop: '.3em',
    marginBottom: '.3em',
    cursor: 'pointer',
  },
})

const Task = ({ title }) => {
  const { root } = useStyles()
  return (
    <Paper className={root} elevation={1}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  )
}

export default Task