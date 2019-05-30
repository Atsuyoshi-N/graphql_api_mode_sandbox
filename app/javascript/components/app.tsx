import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import LeftHeader from './left_header';
import { createMuiTheme, Grid, MuiThemeProvider } from '@material-ui/core';
import MainContents from './main_contents';
import BaseImage from '../images/wunderlist.jpg';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Meiryo UI',
      'Meiryo',
      'メイリオ',
      'ＭＳ Ｐゴシック',
      'MS PGothic',
      'Hiragino Kaku Gothic Pro',
      'Microsoft Yahei',
      '微软雅黑',
      'STXihei',
      'Arial Unicode MS',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

const styles: any = theme => ({
  root: {
    backgroundImage: `url(${BaseImage})`,
    backgroundSize: '100% 100%'
  }
});

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid item xs={3}>
            <LeftHeader />
          </Grid>
          <Grid item xs={9}>
            <Grid container justify="center">
              <Header title="All tasks" />
            </Grid>
          </Grid>
          <MainContents />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
