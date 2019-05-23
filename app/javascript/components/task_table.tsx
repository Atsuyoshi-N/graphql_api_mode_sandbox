import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import TaskList from './task_list';
import { List, withStyles } from '@material-ui/core';

interface Props {
  tasks: object;
  getTasks: any;
}

const styles: any = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px - 50px - 28px)',
    overflow: 'scroll'
  }
});

class TaskTable extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, getTasks }: any = this.props;
    const { classes }: any = this.props;
    console.log(this.props);
    return (
      <List className={classes.root}>
        {tasks.map(
          function(task: any, index: number) {
            return (
              <TaskList
                key={index}
                id={task.id}
                title={task.title}
                body={task.body}
                getTasks={getTasks}
              />
            );
          }.bind(this)
        )}
      </List>
    );
  }
}
export default withStyles(styles)(TaskTable);
