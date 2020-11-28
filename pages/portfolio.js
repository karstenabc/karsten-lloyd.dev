import React, { Component } from "react"
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import styles from '../styles/layout.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Layout from "../components/layout";
import Card from "../components/card"
import Link from "next/link";
import Nav from "react-bootstrap/Nav";

// Render rows of pills
function renderPills(array) {
  const pills = [];
  array.every(item => pills.push(<span className={styles.pill} key={item}>{item}</span> )); //Can change to .map 
  return pills;
}

// Render view all button
function viewAll(title, link) {
  return (
      <>
        <Row>
          <div className={styles.viewAll}>
            <Nav.Link href={`/portfolio/${link}`}>
              View All {title}
            </Nav.Link>
          </div>
        </Row>
      </>
  );
}

class Portfolio extends Component {
  static async getInitialProps({ req }) {
    let pageRequest = `https://api.karsten-lloyd.dev/site.php/experience`;
    let res = await fetch(pageRequest);
    let experience = await res.json();
    pageRequest = `https://api.karsten-lloyd.dev/site.php/projects`;
    res = await fetch(pageRequest);
    let projects = await res.json();
    pageRequest = `https://api.karsten-lloyd.dev/site.php/education`;
    res = await fetch(pageRequest);
    let education = await res.json();
    return { experience: experience, projects: projects, education: education }
  }
  constructor(props) {
      super(props);
      this.state = {}
  }
  render() {
    const { experience, projects, education } = this.props;
    const subheading = <>My <a href="#languages">languages</a>, <a href="#experience">experience</a>, <a href="#projects">projects</a> and <a href="#education">education</a></>;

    // Pills
    const languages = ['JavaScript', 'CSS', 'HTML', 'PHP', 'Python', 'SQL', 'Dart'];
    const frameworks = ['Laravel', 'React-Native', 'NextJS', 'jQuery', 'Flutter', 'RedBean', 'Twig', 'Blade'];
    const tools = ['Android Studio', 'Git', 'phpMyAdmin', 'Unix', 'postman'];
    return (
      <Layout page='portfolio' header={<><h1>PORTFOLIO</h1><p className={styles.subheading}>{subheading}</p></>}>
        <Head>
          <title>Portfolio | Karsten Lloyd</title>
        </Head>
        <Container>
          <nav aria-label="breadcrumb">
            <ol className={`breadcrumb ${styles.breadCrumb}`}>
              <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
            </ol>
          </nav>

          <h2 id="languages">Languages and Skills</h2>
          <Row><div className="col-12">{ renderPills(languages) }</div></Row>
          <Row><div className="col-12">{ renderPills(frameworks) }</div></Row>
          <Row><div className="col-12">{ renderPills(tools) }</div></Row>
          <br />

          <h2 id="experience">Experience</h2>
          <Row>
            {experience.results.slice(0,3).map((e, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                  { Card('experience', e) }
                </div>
            ))}
          </Row>
          { viewAll('Experience', 'experience' )}
          <br />

          <h2 id="projects">Projects</h2>
          <Row>
            {projects.results.slice(0,3).map((e, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                  { Card('project', e) }
                </div>
            ))}
          </Row>
          { viewAll('Projects', 'projects' )}
          <br />

          <h2 id="education">Education</h2>
          <Row>
            {education.results.map((e, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                  { Card('education', e) }
                </div>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Portfolio