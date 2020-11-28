import React from "react"
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import styles from '../../../styles/layout.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Layout from "../../../components/layout";
import Card from "../../../components/card"


// Get page data from DB
Index.getInitialProps = async () => {
  let pageRequest = `https://api.karsten-lloyd.dev/site.php/projects`;
  let res = await fetch(pageRequest);
  let projects = await res.json();
  return { projects: projects }
};


function Index({ projects }) {
  const title = "Portfolio | Karsten Lloyd";
  const section = "portfolio";
  const heading = "PROJECTS";
  const subheading = <>My projects</>;

  return (
      <>
        <Layout page={section} header={<><h1>{heading}</h1><p className={styles.subheading}>{subheading}</p></>}>
          <Head>
            <title>{title}</title>
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
              {projects.results.map((e, index) => (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={{index}}>
                    { Card('project', e) }
                  </div>
              ))}
            </Row>
          </Container>
        </Layout>
      </>
  );
}

export default Index