import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import ItemList from './components/ItemList'

import {
  Routes,
  Route
} from "react-router-dom";

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});


const App = ({classes}) => (
  <main className={classes.main}>
    <Routes>
      <Route path='/' element={<Home />} exact/>
      <Route path="/items" element={<ItemList />}/> 
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route element={<Error />} />
    </Routes>
  </main>
)

export default withStyles(styles)(App);