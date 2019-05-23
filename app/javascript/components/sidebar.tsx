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
  IconButton,
  MenuItem
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import InboxIcon from '@material-ui/icons/Inbox';
import TodayIcon from '@material-ui/icons/Today';
import WeekIcon from '@material-ui/icons/ViewWeek';
import ListIcon from '@material-ui/icons/FormatListBulleted';

interface Props {
  tasks: object;
  relativePath: string;
  getTasks: any;
  setRelativePath: any;
}

const styles = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px - 52px)',
    minWidth: '180px',
    backgroundColor: 'whitesmoke',
    overflow: 'scroll'
  },
  link: {
    textDecoration: 'none'
  },
  menu: {
    paddingLeft: '0px'
  },
  listitemText: {
    padding: '0px'
  }
});

class TaskListSidebar extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes }: any = this.props;
    return (
      <List className={classes.root}>
        <BrowserRouter>
          <Link
            to="/"
            className={classes.link}
            onClick={() => {
              this.props.setRelativePath('/');
            }}
          >
            <MenuItem button selected className={classes.menu}>
              <ListItem key="inbox" role={undefined} dense button>
                <IconButton aria-label="inbox">
                  <InboxIcon />
                </IconButton>
                <ListItemText
                  primary="All Tasks"
                  className={classes.listitemText}
                />
              </ListItem>
            </MenuItem>
          </Link>
          <Link
            to="/star"
            className={classes.link}
            onClick={() => this.props.setRelativePath('/stars')}
          >
            <MenuItem button className={classes.menu}>
              <ListItem key="star" role={undefined} dense button>
                <IconButton aria-label="star">
                  <StarIcon />
                </IconButton>
                <ListItemText
                  primary="星つき"
                  className={classes.listitemText}
                />
              </ListItem>
            </MenuItem>
          </Link>
          <Link
            to="today"
            className={classes.link}
            onClick={() => {
              this.props.setRelativePath('/today');
            }}
          >
            <MenuItem button className={classes.menu}>
              <ListItem key="today" role={undefined} dense button>
                <IconButton aria-label="today">
                  <TodayIcon />
                </IconButton>
                <ListItemText primary="今日" className={classes.listitemText} />
              </ListItem>
            </MenuItem>
          </Link>
          <Link
            to="/week"
            className={classes.link}
            onClick={() => {
              this.props.setRelativePath('/week');
            }}
          >
            <MenuItem button className={classes.menu}>
              <ListItem key="thisweek" role={undefined} dense button>
                <IconButton aria-label="week">
                  <WeekIcon />
                </IconButton>
                <ListItemText primary="週" className={classes.listitemText} />
              </ListItem>
            </MenuItem>
          </Link>
          <Route exact path="/" />
          <Route path="/star" />
          <Route path="/today" />
          <Route path="/week" />
        </BrowserRouter>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
          <MenuItem button className={classes.menu} key={value}>
            <ListItem role={undefined} dense button>
              <IconButton aria-label="lists">
                <ListIcon />
              </IconButton>
              <ListItemText
                primary={`Line item ${value + 1}`}
                className={classes.listitemText}
              />
            </ListItem>
          </MenuItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TaskListSidebar);
