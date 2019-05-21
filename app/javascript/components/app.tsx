import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import Form from './form';
import TaskTable from './task_table';
import TaskListSidebar from './sidebar';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { List } from '@material-ui/core';
import MainContents from './main_contents';

interface State {
  title: string;
  body: string;
  tasks: any;
}

const styles: any = theme => ({
  root: {}
});

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      body: '',
      tasks: []
    };
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios
      .get('http://localhost:3000/api/v1/tasks')
      .then(response => {
        console.log(response.status);
        console.log(response.data);
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { tasks }: any = this.state;
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
        <MainContents tasks={tasks} getTasks={this.getTasks} />
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
