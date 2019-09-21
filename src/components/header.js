import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Link, Button, IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link underline="none" href="/" variant="h4" color="inherit" className={classes.title}>
            <Box fontFamily="Caesar Dressing">{siteTitle}</Box>
          </Link> 
          <Button color="inherit" href="https://acc.stacyvicknair.com">ACC</Button>
          <Button color="inherit" href="/contact/">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
