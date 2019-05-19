import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import TaskList from './task_list';

interface Props {
  tasks: any;
  getTasks: any;
}

export default class TaskTable extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { tasks, getTasks }: any = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    );
  };
}