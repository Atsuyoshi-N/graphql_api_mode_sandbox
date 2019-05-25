import * as React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import {
  ListItem,
  withStyles,
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
}

interface State {
  checked: any;
}

const styles = theme => ({
  aList: {
    textDecoration: 'line-through',
    backgroundColor: fade(theme.palette.common.white, 0.9),
    margin: '2px 0',
    borderRadius: '3px'
  },
  taskText: {
    fontSize: '15px'
  }
});

class DoneList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: [0]
    };
    this.restoreTask = this.restoreTask.bind(this);
  }

  restoreTask(id) {
    axios
      .patch(`http://localhost:3000/api/v1/tasks/${this.props.id}`, {
        deleted_at: null
      })
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
          checked
          tabIndex={-1}
          disableRipple
          onClick={() => this.restoreTask(this.props.id)}
        />
        <ListItemText primary={this.props.title} className={classes.taskText} />
        <ListItemText primary={this.props.body} className={classes.taskText} />
      </ListItem>
    );
  }
}
export default withStyles(styles)(DoneList);
