import React from "react"
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import styles from '../../../styles/layout.module.css'
import Layout from "../../../components/layout";
import Card from "../../../components/card"

// Get page data from DB
Index.getInitialProps = async () => {
  let pageRequest = `https://api.karsten-lloyd.dev/site.php/projects`
  let response = await fetch(pageRequest)
  let data = await response.json()
  return { projects: data.projects }
}


function Index({ projects }) {
  return (
      <>
        <Layout page='portfolio' header={<><h1>PROJECTS</h1><p className={styles.subheading}>My projects</p></>}>
          <Head>
            <title>Portfolio | Karsten Lloyd</title>
          </Head>
          <Container>
            <nav aria-label="breadcrumb">
              <ol className={`breadcrumb ${styles.breadCrumb}`}>
                <li className="breadcrumb-item" aria-current="page"><a href="/portfolio">Portfolio</a></li>
                <li className="breadcrumb-item active" aria-current="page">Projects</li>
              </ol>
            </nav>

            <h2 id="experience">Projects</h2>
            <Row>
              {projects.map((e, index) => (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={{index}}>
                    { Card('project', e) }
                  </div>
              ))}
            </Row>
          </Container>
        </Layout>
      </>
  )
}

export default Index