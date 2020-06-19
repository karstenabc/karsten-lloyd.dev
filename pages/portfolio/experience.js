import React from "react"
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import styles from '../../components/layout.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Layout from "../../components/layout";
import Card from "../../components/card"


// Get page data from DB
Experience.getInitialProps = async () => {
  let pageRequest = `https://api.karsten-lloyd.dev/site.php/experience`;
  let res = await fetch(pageRequest);
  let experience = await res.json();
  return { experience: experience }
};


function Experience({ experience }) {
  const title = "Portfolio | Karsten Lloyd";
  const section = "portfolio";
  const heading = "EXPERIENCE";
  const subheading = <>My previous work</>;

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
                <li className="breadcrumb-item active" aria-current="page">Experience</li>
              </ol>
            </nav>

            <h2 id="experience">Experience</h2>
            <Row>
              {experience.results.map(e => (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    { Card('experience', e) }
                  </div>
              ))}
            </Row>
          </Container>
        </Layout>
      </>
  );
}

export default Experience