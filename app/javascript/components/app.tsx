import * as React from 'react';

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
        <span>Hello typescript</span>;
      </div>
    );
  }
}

export default App;
