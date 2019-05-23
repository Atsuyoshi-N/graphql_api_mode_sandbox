import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    height: '52px',
    backgroundColor: '#fff'
  }
});

class NewTasklistPlusButton extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <AddIcon />
      </Grid>
    );
  }
}

export default withStyles(styles)(NewTasklistPlusButton);
