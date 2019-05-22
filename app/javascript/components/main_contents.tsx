import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, withStyles } from '@material-ui/core';
import TaskListSidebar from './sidebar';
import Form from './form';
import TaskTable from './task_table';

interface Props {}

interface State {
  title: string;
  body: string;
  tasks: object;
}

const styles = theme => ({
  mainContent: {
    height: 'calc(100vh - 64px)'
  }
});

class MainContents extends React.Component<Props, State> {
  constructor(props) {
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
    const { tasks } = this.state;
    const { classes }: any = this.props;
    return (
      <Grid container className={classes.mainContent}>
        <Grid item xs={3}>
          <TaskListSidebar tasks={tasks} getTasks={this.getTasks} />
        </Grid>
        <Grid item xs={9}>
          <Form getTasks={this.getTasks} />
          <TaskTable tasks={tasks} getTasks={this.getTasks} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MainContents);
