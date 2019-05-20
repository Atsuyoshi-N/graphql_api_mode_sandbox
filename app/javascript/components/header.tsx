import * as React from 'react';

interface Props {
  title: string;
}

export default class Header extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  };
};
