import React from "react";
import Layout from "./layout";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import fetch from "isomorphic-unfetch";

function Title(title, subheading) {
  // Create page title component
  return (
      <>
        <h1>{title}</h1>
        <p className={styles.subheading}>{subheading}</p>
      </>
  );
}


function Page(title, section, heading, subheading, breadcrumb, children) {
  return (
      <>
        <Layout page={section} header={Title(heading, subheading)}>
          <Head>
            <title>{title}</title>
          </Head>
          <Container>
            { breadcrumb }
            { children }
          </Container>
        </Layout>
      </>
  );
}

export default Page