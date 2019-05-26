import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, withStyles } from '@material-ui/core';
import TaskListSidebar from './sidebar';
import NewTasklistPlusButton from './new_tasklist_plus_button';
import Form from './form';
import TaskTable from './task_table';

interface Props {}

interface State {
  title: string;
  body: string;
  relativePath: string;
  tasks: object;
  doneTasks: object;
}

const styles = theme => ({
  mainContent: {
    height: 'calc(100vh - 64px)'
  },
  rightContents: {
    padding: '0 14px'
  }
});

class MainContents extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      relativePath: '/',
      tasks: [],
      doneTasks: []
    };
    this.getTasks = this.getTasks.bind(this);
    this.setRelativePath = this.setRelativePath.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  async getTasks() {
    await axios
      .get(`http://localhost:3000/api/v1/tasks${this.state.relativePath}`)
      .then(response => {
        //console.log(response.status);
        //console.log(response.data);
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(`http://localhost:3000/api/v1/tasks/done${this.state.relativePath}`)
      .then(response => {
        this.setState({ doneTasks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setRelativePath(value) {
    this.setState({ relativePath: value }, () => {
      this.getTasks();
    });
  }

  render() {
    const { tasks, doneTasks } = this.state;
    const { classes }: any = this.props;
    return (
      <Grid container className={classes.mainContent}>
        <Grid item xs={3}>
          <TaskListSidebar
            tasks={tasks}
            relativePath={this.state.relativePath}
            setRelativePath={this.setRelativePath}
          />
          <NewTasklistPlusButton />
        </Grid>
        <Grid item xs={9} className={classes.rightContents}>
          <Form getTasks={this.getTasks} />
          <TaskTable
            tasks={tasks}
            doneTasks={doneTasks}
            getTasks={this.getTasks}
            relativePath={this.state.relativePath}
            setRelativePath={this.setRelativePath}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MainContents);
