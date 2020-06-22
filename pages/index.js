import React, { Component } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/font.module.css'
import Link from "next/link";

const Home = () => (
  <Layout page={"home"}>
    <Head>
      <title>test</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      {/*<Link href="projects/advent-of-code/2018"><a>link</a></Link>*/}
    </section>
  </Layout>
);

export default Home;