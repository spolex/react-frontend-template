import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid,
        Paper,
        Typography} from '@material-ui/core'
import ItemNew from '../components/ItemNew'
import ItemList from '../components/ItemList'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  return(
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <Paper className={classes.paper} elevation={1}><Typography variant="h4">Users Administration Home</Typography></Paper>
          </Grid>
          <Grid item xs={12} md={6}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="h6">New User</Typography>
                <ItemNew/>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
              <Paper className={classes.paper} elevation={1}>
              <Typography variant="h6">List of Users</Typography>
                <ItemList/>
              </Paper>
          </Grid>
        </Grid>
      </div>  
    )
  }