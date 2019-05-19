import * as React from 'react'
import axios from 'axios'
import { render } from 'react-dom';

interface Props {
  key: number;
  id: number;
  title: string;
  body: string;
  getTasks: any;
}

export default class TaskList extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    axios.delete(`http://localhost:3000/api/v1/tasks/${this.props.id}`)
      .then(response => {
        console.log(response);
        this.props.getTasks();
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.body}</td>
        <td>
          <a href="#" onClick={() => this.deleteTask(this.props.id)}>削除</a>
        </td>
      </tr>
    );
  }
}