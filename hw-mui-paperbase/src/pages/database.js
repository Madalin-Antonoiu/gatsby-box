import React from 'react'
import PropTypes from 'prop-types';
import Layout from '../components/layout'
import {Link} from 'gatsby'



const DbPage = () => {


  return (
    <Layout>
      <Link to="/"> Go home </Link>
    </Layout>
  );
};

DbPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DbPage;




    


