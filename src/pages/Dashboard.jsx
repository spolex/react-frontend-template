import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,
        Paper,
        Typography} from '@material-ui/core'
import BiaxialLineChart from '../components/BiaxialLineChart'
import Composed from '../components/ComposedChart'
import { ResponsiveContainer } from 'recharts'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "99%",
    height: "99%"
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return(
      <div className={classes.root} >
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <Paper className={classes.paper} elevation={1}><Typography variant="h4">Dashboard</Typography></Paper>
          </Grid>
          <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation={1}>
                <Typography variant="h6">Composed Chart</Typography>
                <ResponsiveContainer aspect={3} width="99%"><Composed/></ResponsiveContainer>
                </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
              <Paper className={classes.paper} elevation={1}>
              <Typography variant="h6">Line chart</Typography>
              <ResponsiveContainer aspect={3} width="99%"><BiaxialLineChart/></ResponsiveContainer>
              </Paper>
          </Grid>
        </Grid>
      </div>  
    )
  }