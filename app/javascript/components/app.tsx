import * as React from 'react';
import Header from "./header";
import Form from "./form";

interface State {
  title?: string;
  body?: string;
}

class App extends React.Component<{}> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  render() {
    return (
      <div>
        <Header title="Rails 5.2 + webpacker + React + Typescript + GraphQL" />
        <div>
          <span>Hello typescript</span>;
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
