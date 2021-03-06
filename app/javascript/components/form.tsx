import * as React from 'react';
import axios from 'axios';
import { Paper, IconButton, InputBase, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface Props {
  getTasks: any;
}

interface State {
  title: string;
  body: string;
}
const styles: any = {
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: 'rgba(102, 137, 100, 0.75)',
    margin: '14px 0'
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color: '#fff'
  },
  iconButton: {
    padding: 10,
    color: '#fff'
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class Form extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  handleSubmit(e) {
    if (e.keycode === 13) {
      this.createTask(e);
    }
  }

  createTask(event) {
    const data: object = { title: this.state.title, body: this.state.body };
    axios
      .post('http://localhost:3000/api/v1/tasks', data)
      .then(response => {
        this.props.getTasks();
        this.setState({
          title: '',
          body: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    let { title, body } = this.state;
    const { classes }: any = this.props;
    return (
      <Paper className={classes.root}>
        <form onSubmit={this.createTask} noValidate autoComplete="on">
          <IconButton className={classes.iconButton} aria-label="Add">
            <AddIcon />
          </IconButton>
          <InputBase
            type="text"
            value={title}
            className={classes.input}
            placeholder="Title"
            autoComplete="on"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
            onKeyDown={e => {
              this.handleSubmit;
            }}
          />
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Form);
