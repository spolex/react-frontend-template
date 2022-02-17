import React, { Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import ItemMockComponent from './components/ItemsApp'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
  <Fragment>
    <CssBaseline/>
    <AppHeader/>
    <main className={classes.main}>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/items" element={ <ItemMockComponent/>}/> 
    </Routes>
    </main>
  </Fragment>
)

export default withStyles(styles)(App);