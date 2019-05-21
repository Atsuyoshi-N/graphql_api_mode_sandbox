import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import TaskListSidebar from './sidebar';
import Form from './form';
import TaskTable from './task_table';

interface State {
  title: string;
  body: string;
  tasks: object;
}

class MainContents extends React.Component<{}, State> {
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
    return (
      <Grid container>
        <Grid item xs={3}>
          <TaskListSidebar />
        </Grid>
        <Grid item xs={9}>
          <Form getTasks={this.getTasks} />
          <TaskTable tasks={tasks} getTasks={this.getTasks} />
        </Grid>
      </Grid>
    );
  }
}

export default MainContents;
