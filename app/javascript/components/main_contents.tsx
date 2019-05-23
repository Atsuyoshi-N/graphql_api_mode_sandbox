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
      tasks: []
    };
    this.getTasks = this.getTasks.bind(this);
    this.setRelativePath = this.setRelativePath.bind(this);
    this.endPointRelativePath = this.endPointRelativePath.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  endPointRelativePath(relativePath: string) {
    switch (relativePath) {
      case '/':
        return '/inboxes';
        break;
      case '/stars':
        return '/stars';
        break;
      case '/today':
        return '/today';
        break;
      case '/week':
        return '/week';
        break;
      default:
        return '/';
        break;
    }
  }

  getTasks() {
    const BASEURL = 'http://localhost:3000/api/v1/tasks';
    const url = BASEURL + this.endPointRelativePath(this.state.relativePath);
    axios
      .get(url)
      .then(response => {
        //console.log(response.status);
        //console.log(response.data);
        this.setState({ tasks: response.data });
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
    const { tasks } = this.state;
    const { classes }: any = this.props;
    return (
      <Grid container className={classes.mainContent}>
        <Grid item xs={3}>
          <TaskListSidebar
            tasks={tasks}
            getTasks={this.getTasks}
            relativePath={this.state.relativePath}
            setRelativePath={this.setRelativePath}
          />
          <NewTasklistPlusButton />
        </Grid>
        <Grid item xs={9} className={classes.rightContents}>
          <Form getTasks={this.getTasks} />
          <TaskTable
            tasks={tasks}
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
