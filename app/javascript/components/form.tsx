import * as React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons';
import DirectionsIcon from '@material-ui/icons';

interface Props {
  getTasks: any;
}

interface State {
  title: string;
  body: string;
}
const styles: any = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 720,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class Form extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTask = this.createTask.bind(this);
  };

  handleSubmit(e) {
    if (e.keycode === 13) {
      this.createTask(e);
    }
  }

  createTask(event) {
    const data: any = { "title": this.state.title, "body": this.state.body };
    axios.post('http://localhost:3000/api/v1/tasks', data)
      .then(response => {
        this.props.getTasks();
        this.setState({
          title: '',
          body: ''
        });
      }).catch(error => {
        console.log(error);
      })
    event.preventDefault();
  }

  render() {
    let { title, body } = this.state;
    const { classes }: any = this.props;
    return (
      <form onSubmit={this.createTask} noValidate autoComplete="off">
        <Paper className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="Add">
            <AddIcon />
          </IconButton>
          <InputBase
            type="text"
            value={title}
            className={classes.input}
            placeholder="Title"
            onChange={(e) => { this.setState({ title: e.target.value }) }}
            onKeyDown={(e) => { this.handleSubmit }}
          />
        </Paper>
      </form>
    )
  }
}

export default withStyles(styles)(Form); 
