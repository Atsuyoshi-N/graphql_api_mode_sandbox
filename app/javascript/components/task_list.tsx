import * as React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import {
  withStyles,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

interface Props {
  key: number;
  id: number;
  title: string;
  body: string;
  getTasks: any;
  getDoneTasks: any;
}

interface State {
  checked: any;
}

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
  constructor(props: any) {
    super(props);
    this.state = {
      checked: [0]
    };
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    axios
      .delete(`http://localhost:3000/api/v1/tasks/${this.props.id}`)
      .then(response => {
        console.log(response);
        this.props.getTasks();
        this.props.getDoneTasks();
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleToggle(value) {
    const { checked }: any = this.state;
    const currentIdx: number = checked.indexOf(value);
    const newChecked: any = [...checked];

    if (currentIdx === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIdx, 1);
    }
    this.setState(
      {
        checked: newChecked
      },
      () => {
        this.deleteTask(value);
      }
    );
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
          checked={this.state.checked.indexOf(this.props.id) !== -1}
          tabIndex={-1}
          disableRipple
          onClick={() => this.handleToggle(this.props.id)}
        />
        <ListItemText primary={this.props.title} className={classes.taskText} />
        <ListItemText primary={this.props.body} className={classes.taskText} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(TaskList);
