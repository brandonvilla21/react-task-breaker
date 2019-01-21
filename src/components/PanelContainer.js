import React from 'react'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  childContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '.5em',
  },
  title: {
    paddingLeft: '10em',
  },
  divider: {
    paddingRight: '2em',
    paddingLeft: '2em',
  },
})

const PanelContainer = ({ title, children }) => {
  const classes = useStyles()
  return ( 
    <div>
      <Typography variant="display1" color="textPrimary">{title}</Typography>
      <Divider className={classes.divider}/>
      <div className={classes.childContainer}>
        {children}
      </div>
    </div>
  
  )
}


export default PanelContainer