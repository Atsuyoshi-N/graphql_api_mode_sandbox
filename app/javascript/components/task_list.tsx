import * as React from 'react';
import axios from 'axios';
import {
  withStyles,
  ListItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

interface Props {
  key: number;
  id: number;
  title: string;
  body: string;
  getTasks: any;
}

interface State {}

const styles = theme => ({
  aList: {
    backgroundColor: fade(theme.palette.common.white, 0.9),
    margin: '2px 0',
    borderRadius: '3px'
  },
  taskText: {
    fontSize: '15px'
  }
});

class TaskList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    axios
      .delete(`http://localhost:3000/api/v1/tasks/${this.props.id}`)
      .then(response => {
        console.log(response);
        this.props.getTasks();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes }: any = this.props;
    return (
      <ListItem
        key={this.props.id}
        role={undefined}
        dense
        button
        className={classes.aList}
      >
        <Checkbox
          checked={false}
          tabIndex={-1}
          disableRipple
          onClick={() => this.deleteTask(this.props.id)}
        />
        <ListItemText primary={this.props.title} className={classes.taskText} />
        <ListItemText primary={this.props.body} className={classes.taskText} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(TaskList);
