import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles: any = theme => ({
  root: {
    width: '100%',
    minWidth: '180px'
  },
  appBar: {
    backgroundColor: '#5b7a59',
    width: '100%'
  },
  toolbar: {
    width: '100%',
    padding: 0
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    pointerEvents: 'none'
  }
});

class LeftHeader extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid container justify="space-between" alignItems="center">
              <IconButton color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Open drawer">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(LeftHeader);
