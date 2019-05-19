import * as React from 'react';
import Header from "./header";
import Form from "./form";
import TaskTable from './task_table';
import axios from 'axios';

interface State {
  title: string;
  body: string;
  tasks: any;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      body: '',
      tasks: []
    };
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios.get('http://localhost:3000/api/v1/tasks')
      .then(response => {
        console.log(response.status);
        console.log(response.data);
        this.setState({ tasks: response.data })
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    const { tasks }: any = this.state;
    return (
      <div>
        <Header title="Todo App" />
        <div>
          <span>Hello typescript</span>;
        </div>
        <Form getTasks={this.getTasks} />
        <TaskTable tasks={tasks} getTasks={this.getTasks} />
      </div>
    );
  }
}

export default App;
