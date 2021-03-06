import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box';


import Paperbase from './Paperbase/Paperbase.js';

// eslint-disable-next-line
const styles = theme => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});


const Layout = (props) => {
  const {children} = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          >
            <html lang="en"/>
          </Helmet>

            <Paperbase siteTitle={data.site.siteMetadata.title}>

                <Box component="main">
                {children}
                </Box>

          </Paperbase>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;