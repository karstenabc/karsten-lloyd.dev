import React from "react"
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import styles from '../components/layout.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Layout from "../components/layout";
import Card from "../components/card"
import Link from "next/link";


// Get page data from DB
Portfolio.getInitialProps = async ({ req, query }) => {
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
};


// Render rows of pills
function renderPills(array) {
  const pills = [];
  array.every(item => pills.push(<span className={styles.pill} key={item}>{item}</span> ));
  return pills;
}


// Render view all button
function viewAll(title, link) {
  return (
      <>
        <Row>
          <div className={styles.viewAll}>
            <Link href="portfolio">
              <a>View All {title}</a>
            </Link>
            {/*<a href={`/portfolio/`+link}>View All {title}</a>*/}
          </div>
        </Row>
      </>
  );
}


function Portfolio({ experience, projects, education }) {
  const title = "Portfolio | Karsten Lloyd";
  const section = "portfolio";
  const heading = "PORTFOLIO";
  const subheading = <>My <a href="#languages">languages</a>, <a href="#experience">experience</a>, <a href="#projects">projects</a> and <a href="#education">education</a></>;

  // Pills
  const languages = ['CSS', 'Dart', 'HTML', 'JavaScript', 'PHP', 'Python', 'SQL'];
  const frameworks = ['BootStrap', 'Flutter', 'NextJS', 'jQuery', 'React-Native', 'RedBean', 'Twig', 'xlutils'];
  const tools = ['Android Studio', 'Git', 'phpMyAdmin'];


  return (
      <>
        <Layout page={section} header={<><h1>{heading}</h1><p className={styles.subheading}>{subheading}</p></>}>
          <Head>
            <title>{title}</title>
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
              {experience.results.slice(0,3).map(e => (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    { Card('experience', e) }
                  </div>
              ))}
            </Row>
            { viewAll('Experience', 'experience' )}
            <br />

            <h2 id="projects">Projects</h2>
            <Row>
              {projects.results.slice(0,3).map(e => (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    { Card('project', e) }
                  </div>
              ))}
            </Row>
            { viewAll('Projects', 'projects' )}
            <br />

            <h2 id="education">Education</h2>
            <Row>
              {education.results.map(e => (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    { Card('education', e) }
                  </div>
              ))}
            </Row>
          </Container>
        </Layout>
      </>
  );
}

export default Portfolio