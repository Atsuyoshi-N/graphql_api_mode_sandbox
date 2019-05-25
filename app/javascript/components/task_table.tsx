import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import TaskList from './task_list';
import DoneList from './done_list';
import { Grid, List, withStyles } from '@material-ui/core';

interface Props {
  tasks: object;
  doneTasks: object;
  relativePath: string;
  getTasks: any;
  setRelativePath: any;
}

interface State {
  gottenTasks: object;
}

const styles: any = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px - 50px - 28px)',
    overflow: 'scroll'
  },
  lists: {
    width: '100%'
  }
});

class TaskTable extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      gottenTasks: []
    };
  }

  render() {
    const { tasks, doneTasks, getTasks }: any = this.props;
    console.log(doneTasks);
    const { classes }: any = this.props;
    console.log(`relativePath is: ${this.props.relativePath}`);
    return (
      <Grid container className={classes.root}>
        <List className={classes.lists}>
          {tasks.map(
            function(task: any, index: number) {
              return (
                <TaskList
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  body={task.body}
                  getTasks={getTasks}
                />
              );
            }.bind(this)
          )}
        </List>
        <List className={classes.lists}>
          {doneTasks.map(
            function(task: any, index: number) {
              return (
                <DoneList
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  body={task.body}
                  getTasks={getTasks}
                />
              );
            }.bind(this)
          )}
        </List>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskTable);
