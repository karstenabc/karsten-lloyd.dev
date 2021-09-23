import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import ReactHtmlParser from 'react-html-parser';
import { Container } from 'react-bootstrap';
import styles from '../../../../styles/layout.module.css';
import Layout from '../../../../components/layout';

// Get page data from DB
PrivacyPolicy.getInitialProps = async ctx => {
  let projectName = ctx.query.name;
  let pageRequest = `https://api.karsten-lloyd.dev/site.php/privacy-policy/` + projectName;
  let response = await fetch(pageRequest);
  let data = await response.json();
  return {
    project: data.project,
    policy: data.privacyPolicy,
    sections: data.privacyPolicySections
  };
};

function formatDate(date) {
  let d = new Date(date);
  return d.toLocaleDateString();
}

function PrivacyPolicy({ project, policy, sections }) {
  return (
    <>
      <Layout
        page='portfolio'
        header={
          <>
            <h1>PRIVACY POLICY</h1>
            <p className={styles.subheading}>Last Updated: {formatDate(policy.date)}</p>
          </>
        }
      >
        <Head>
          <title>{project.title} | Privacy Policy</title>
        </Head>
        <Container>
          <nav aria-label='breadcrumb'>
            <ol className={`breadcrumb ${styles.breadCrumb}`}>
              <li className='breadcrumb-item' aria-current='page'>
                <a href='/portfolio'>Portfolio</a>
              </li>
              <li className='breadcrumb-item' aria-current='page'>
                <a href='/portfolio/projects'>Projects</a>
              </li>
              <li className='breadcrumb-item' aria-current='page'>
                <a href={'/portfolio/projects/' + project.name}>{project.title}</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Privacy Policy
              </li>
            </ol>
          </nav>

          <h2>Contents</h2>
          <ul>
            {sections &&
              sections.map((section, index) => (
                <li key={index}>
                  <a href={'#section' + section.section}>{section.title}</a>
                </li>
              ))}
          </ul>
          <br />

          {sections &&
            sections.map((section, index) => (
              <div className='mb-4' key={section.id}>
                <h3 id={'section' + section.section}>{section.title}</h3>
                {ReactHtmlParser(section.content)}
              </div>
            ))}
        </Container>
      </Layout>
    </>
  );
}

export default PrivacyPolicy;
