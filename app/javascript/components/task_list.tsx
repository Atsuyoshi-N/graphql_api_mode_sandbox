import * as React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

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

export default class TaskList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: [0]
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

  handleToggle(value) {
    const { checked }: any = this.state;
    const currentIdx: number = checked.indexOf(value);
    const newChecked: any = [...checked];

    if (currentIdx === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIdx, 1);
    }
    this.setState({
      checked: newChecked
    });
  }

  render() {
    return (
      <ListItem
        key={this.props.id}
        role={undefined}
        dense
        button
        onClick={() => this.handleToggle(this.props.id)}
      >
        <Checkbox
          checked={this.state.checked.indexOf(this.props.id) !== -1}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={this.props.title} />
        <ListItemText primary={this.props.body} />

        <ListItemSecondaryAction>
          <a href="#" onClick={() => this.deleteTask(this.props.id)}>
            削除
          </a>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
