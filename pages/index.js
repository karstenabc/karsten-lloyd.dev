import React from "react"
import Head from "next/head"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import styles from '../styles/layout.module.css'
import Layout from "../components/layout";
import { TitleContainer, Title, SubTitle, Divider, ContactContainer } from '../styles/index'

const Home = () => (
  <Layout page={"home"}>
    <Head>
      <title>Karsten Lloyd</title>
    </Head>
    
    <Container>
      <div className="row my-3">
        <div className="col-sm-0 col-md-1 col-lg-3"></div>
        <div className="col align-self-center col-md-12 col-lg-6">
          <TitleContainer>
            <Title>Karsten Lloyd</Title>
            <Divider/>
            <SubTitle>Full Stack Developer</SubTitle>
          </TitleContainer>
        </div>
      </div>
      <Row>
      <div className="col-sm-0 col-md-1 col-lg-3"></div>
        <div className="col align-self-center col-md-12 col-lg-6">
          <Row className={styles.externalLinks}>
            <div className="col-4">
              <a href="https:////github.com/karstenabc">
                <ContactContainer>
                  <p>GitHub</p>
                </ContactContainer>
              </a>
            </div>
            <div className="col-4">
              <a href="https://linkedin.com/in/karsten-lloyd">
                <ContactContainer>
                  <p>LinkedIn</p>
                </ContactContainer>
              </a>
            </div>
            <div className="col-4">
              <a href="https://play.google.com/store/apps/developer?id=Karsten+Lloyd">
                <ContactContainer>
                  <p>Play Store</p>
                </ContactContainer>
              </a>
            </div>
          </Row>
        </div>
      </Row>
    </Container>
  </Layout>
)

export default Home;