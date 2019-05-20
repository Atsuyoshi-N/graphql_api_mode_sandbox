import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import TaskList from './task_list';

interface Props {
  tasks: any;
  getTasks: any;
}
const styles: any = theme => ({
  root: {
    width: '80%'
  }
});

class TaskTable extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { tasks, getTasks }: any = this.props;
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
