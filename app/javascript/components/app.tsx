import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from "./header";
import Form from "./form";
import TaskTable from './task_table';
import axios from 'axios';
import { Grid } from '@material-ui/core'
import { List } from '@material-ui/core';

interface State {
  title: string;
  body: string;
  tasks: any;
}

const styles: any = theme => ({
  root: {
    width: '100%',
    maxWidth: 720,
  },
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
    axios.get('http://localhost:3000/api/v1/tasks')
      .then(response => {
        console.log(response.status);
        console.log(response.data);
        this.setState({ tasks: response.data })
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    const { tasks }: any = this.state;
    const { classes }: any = this.props;
    return (
      <div>
        <Header title="Todo App" />
        <Grid container justify="center" className={classes.root}>
          <Form getTasks={this.getTasks} />
        </Grid>
        <Grid container justify="center" className={classes.root}>
          <TaskTable tasks={tasks} getTasks={this.getTasks} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
