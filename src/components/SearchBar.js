import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500, // TODO: make this responsive
  },
})

// TODO
// [] Make TextFiled fontSize bigger
// [] Position for Dialog should appear a little higher
// [] Unmount component when onClose is called
const SearchBar = (props) => {
  const { classes } = props
  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)
  const handleKeyPress = ({ key }) => key === 'Enter' && props.onClose(value)

  return (
    <Dialog className={classes.dialog} open={props.open}>
      <TextField
        id="standard-name"
        className={classes.textField}
        placeholder="My task..."
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        margin="normal"
      />
    </Dialog>
  )
}

export default withStyles(styles)(SearchBar)
