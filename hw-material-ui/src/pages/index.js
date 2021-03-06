import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout'
import Image from "../components/image"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h2">Hi people</Typography>
        <Typography variant="subtitle1" paragraph>
          Welcome to your new Gatsby site using <a href="https://material-ui.com">Material UI</a> for the UI.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Now go build something great.
        </Typography>
            <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Paper>
    </Layout>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default IndexPage;




    


