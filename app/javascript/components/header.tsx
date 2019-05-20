import * as React from 'react';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="h4" gutterBottom>{this.props.title}</Typography>
      </div>
    );
  };
};
