import React from 'react'
import Layout from '../components/layout'
import Content from '../components/Content/Content.js';
import {Link} from 'gatsby';
import Image from '../components/image.js'

const IndexPage = () => {


  return (
    <Layout>
      <Content />
      <Link to="/database"> View database </Link>

    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image/>
    </div>

    </Layout>
  );
};


export default IndexPage;







