import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import { Grid } from '@material-ui/core';
import MainContents from './main_contents';

const styles: any = theme => ({
  root: {}
});

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <Header title="" />
        </Grid>
        <Grid item xs={9}>
          <Grid container justify="center">
            <Header title="Todo App" />
          </Grid>
        </Grid>
        <MainContents />
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
