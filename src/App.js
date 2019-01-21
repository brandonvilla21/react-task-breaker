import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import PanelContainer from './components/PanelContainer'
import makeStyles from '@material-ui/styles/makeStyles'
import Task from './components/Task'
import data from './mock-data'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    padding: '.5em'
  },
  fab: {
    position: 'absolute !important',
    bottom: '16px',
    right: '16px',
  },
})

const App = () => {
  const [open, setOpen] = useState(false)
  const [tasks, setTask] = useState(data.tasks)
  const classes = useStyles()
  const handleClose = (value) => {
    setTask([...tasks, { id: tasks.length, title: value }]);
    setOpen(false)
  }

  return (
    <div className={classes.root}>
        <PanelContainer title="Morning">
          {
            tasks.map(task => <Task key={task.id} title={task.title}/>)
          }
        </PanelContainer>
        <PanelContainer title="Afternoon">
        </PanelContainer>
        <PanelContainer title="Night">
        </PanelContainer>

        <Fab className={classes.fab} color="primary" onClick={_ => setOpen(true)}>
            <AddIcon/>
        </Fab>
        <SearchBar open={open} onClose={handleClose} />
    </div>
  );
}

export default App;
