import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { TitleContainer, Title, SubTitle, Divider } from '../styles/index'


const Home = () => (
  <Layout page={"home"}>
    <Head>
      <title>Karsten Lloyd</title>
      <link href="/static/fonts/fonts.css" rel="stylesheet"/>
    </Head>
    <TitleContainer>
      <Title>Karsten Lloyd</Title>
      <Divider/>
      <SubTitle>Front End Developer</SubTitle>
    </TitleContainer>
  </Layout>
);

export default Home;