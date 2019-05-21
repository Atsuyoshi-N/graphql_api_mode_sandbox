import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TaskTable from './task_table';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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

interface Props {
  tasks: object;
  getTasks: any;
}

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: '180px',
    height: '100%',
    backgroundColor: 'whitesmoke'
  },
  link: {
    textDecoration: 'none'
  }
});

class TaskListSidebar extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    console.log(this.props);
    console.log(this.props.tasks);
    return (
      <List className={classes.root}>
        <BrowserRouter>
          <Link to="/" className={classes.link}>
            <ListItem key="inbox" role={undefined} dense button>
              <IconButton aria-label="inbox">
                <InboxIcon />
              </IconButton>
              <ListItemText primary="All Tasks" />
            </ListItem>
          </Link>
          <Link to="/star" className={classes.link}>
            <ListItem key="star" role={undefined} dense button>
              <IconButton aria-label="star">
                <StarIcon />
              </IconButton>
              <ListItemText primary="星つき" />
            </ListItem>
          </Link>
          <Link to="today" className={classes.link}>
            <ListItem key="today" role={undefined} dense button>
              <IconButton aria-label="today">
                <TodayIcon />
              </IconButton>
              <ListItemText primary="今日" />
            </ListItem>
          </Link>
          <Link to="/week" className={classes.link}>
            <ListItem key="thisweek" role={undefined} dense button>
              <IconButton aria-label="week">
                <WeekIcon />
              </IconButton>
              <ListItemText primary="週" />
            </ListItem>
          </Link>
          <Route exact path="/" />
          <Route path="/star" />
          <Route path="/today" />
          <Route path="/week" />
        </BrowserRouter>
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
