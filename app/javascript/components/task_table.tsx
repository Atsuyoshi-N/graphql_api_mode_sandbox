import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import TaskList from './task_list';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

interface Props {
  tasks: any;
  getTasks: any;
  classes: any;
}

const styles: any = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
});

class TaskTable extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { tasks, getTasks }: any = this.props;
    return (
      <List className={this.props.classes.root}>
        {tasks.map(function (task: any, index: number) {
          return (
            <TaskList
              key={index}
              id={task.id}
              title={task.title}
              body={task.body}
              getTasks={getTasks}
            />);
        }.bind(this))}
      </List>
    );
  };
}
export default withStyles(styles)(TaskTable);