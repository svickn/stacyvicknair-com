import React from "react"
import { Button, Grid, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  mainHero: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(dragon.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
  <Layout>
    <SEO title="Home" />
    <Paper className={classes.mainHero}>
      <HeroImage/>
      <Grid container>
        <Grid className={classes.mainFeaturedPostContent} item md={12}>
          <Grid container justify="center" spacing={2}>
              <Grid md={6} item>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h3" gutterBottom>
              Stay awhile and listen
            </Typography>
            <Typography variant="h5" paragraph>
              This site is currently a work in progress. Stick around and we'll see where we go!
            </Typography>
            <Button variant="contained" href="/contact/" color="primary">Contact me!</Button>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Layout>
);}

export default IndexPage
