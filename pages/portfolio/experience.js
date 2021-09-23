import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { Container, Row } from 'react-bootstrap/Container';
import styles from '../../styles/layout.module.css';
import Layout from '../../components/layout';
import Card from '../../components/card';

class Experience extends Component {
  static async getInitialProps({ req }) {
    let pageRequest = `https://api.karsten-lloyd.dev/site.php/experience`;
    let response = await fetch(pageRequest);
    let data = await response.json();
    return { experience: data.experience };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { experience } = this.props;
    return (
      <Layout
        page='portfolio'
        header={
          <>
            <h1>EXPERIENCE</h1>
            <p className={styles.subheading}>My previous work</p>
          </>
        }
      >
        <Head>
          <title>Portfolio | Karsten Lloyd</title>
        </Head>
        <Container>
          <nav aria-label='breadcrumb'>
            <ol className={`breadcrumb ${styles.breadCrumb}`}>
              <li className='breadcrumb-item' aria-current='page'>
                <a href='/portfolio'>Portfolio</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Experience
              </li>
            </ol>
          </nav>

          <h2 id='experience'>Experience</h2>
          <Row>
            {experience &&
              experience.map((e, index) => (
                <div key={index} className='col-sm-12 col-md-6 col-lg-4'>
                  {Card('experience', e)}
                </div>
              ))}
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Experience;
