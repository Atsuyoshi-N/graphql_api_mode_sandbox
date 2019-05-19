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
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.body}</td>
        <td>
          <a href="#"></a>
        </td>
      </tr>
    );
  }
}