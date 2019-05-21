import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import InboxIcon from '@material-ui/icons/Inbox';
import TodayIcon from '@material-ui/icons/Today';
import WeekIcon from '@material-ui/icons/ViewWeek';
import ListIcon from '@material-ui/icons/FormatListBulleted';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class TaskListSidebar extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    return (
      <List className={classes.root}>
        <ListItem key="inbox" role={undefined} dense button>
          <IconButton aria-label="inbox">
            <InboxIcon />
          </IconButton>
          <ListItemText primary="受信箱" />
        </ListItem>
        <ListItem key="star" role={undefined} dense button>
          <IconButton aria-label="star">
            <StarIcon />
          </IconButton>
          <ListItemText primary="星つき" />
        </ListItem>
        <ListItem key="today" role={undefined} dense button>
          <IconButton aria-label="today">
            <TodayIcon />
          </IconButton>
          <ListItemText primary="今日" />
        </ListItem>
        <ListItem key="thisweek" role={undefined} dense button>
          <IconButton aria-label="week">
            <WeekIcon />
          </IconButton>
          <ListItemText primary="週" />
        </ListItem>
        {[0, 1, 2, 3].map(value => (
          <ListItem key={value} role={undefined} dense button>
            <IconButton aria-label="lists">
              <ListIcon />
            </IconButton>
            <ListItemText primary={`Line item ${value + 1}`} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TaskListSidebar);
