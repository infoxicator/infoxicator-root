
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#004953',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <a className="navbar-item" href="https://infoxicator.com">
          <img src="http://www.infoxication.net/wp-content/uploads/2020/03/infoxicator.com_.png" width="210" height="24" alt="infoxicator.com logo" />
        </a>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
