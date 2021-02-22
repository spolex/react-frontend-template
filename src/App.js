import React, { Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import ItemList from './components/ItemList'

import {
  BrowserRouter as Router,
  Switch,
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
  <main className={classes.main}>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/items" component={ItemList}/> 
      <Route path='/about' component={About} />
      <Route path='/dashboard' component={Dashboard} />
      <Route component={Error} />
    </Switch>
  </main>
)

export default withStyles(styles)(App);