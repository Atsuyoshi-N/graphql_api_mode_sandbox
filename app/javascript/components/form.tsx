import * as React from 'react';
import axios from 'axios';

interface Props {
  getTasks: any;
}

interface State {
  title: string;
  body: string;
}

export default class Form extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
    this.createTask = this.createTask.bind(this);
  };

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
    return (
      <form onSubmit={this.createTask}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => { this.setState({ title: e.target.value }) }}
        />
        <input
          type="text"
          value={body}
          placeholder="Body"
          onChange={(e) => { this.setState({ body: e.target.value }) }}
        />
        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}
