<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>



## 🚀 Quick start

1.  **Quickly create another page**


    ```sh
    # 1. Create src/pages/about.js and add this code:
    import React from 'react'
    import { Link } from 'gatsby'
    import Layout from '../components/layout'

    const AboutPage = () => (
        <Layout>
            <h1>About</h1>
                <p>This application is a curated...</p>
                <Link to="/">Home</Link>
                </Layout>
    )
    export default AboutPage
    # 2. Attach /about at the end of your link. It should discover it automatically (being in develop)
    ```








- If you are in yarn develop (gatsby develop), it will automatically find it if you attach /about at the end of your link