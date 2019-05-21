import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import TaskListSidebar from './sidebar';
import Form from './form';
import TaskTable from './task_table';

interface Props {
  tasks: object;
  getTasks: any;
}

class MainContents extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <TaskListSidebar />
        </Grid>
        <Grid item xs={9}>
          <Form getTasks={this.props.getTasks} />
          <TaskTable tasks={this.props.tasks} getTasks={this.props.getTasks} />
        </Grid>
      </Grid>
    );
  }
}

export default MainContents;
