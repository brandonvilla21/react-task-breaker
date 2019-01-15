import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';

const App = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const handleClose = (value) => {setText(value); setOpen(false)}

  return (
    <div>
        <SearchBar open={open} onClose={handleClose} />
        
        
        <Button onClick={_ => setOpen(true)}>
          This should work with a shortcut
        </Button>
        <Typography>
          Text: {text}
        </Typography>
    </div>
  );
}

export default App;
