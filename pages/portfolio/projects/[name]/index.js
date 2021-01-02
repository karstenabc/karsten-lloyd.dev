import React from "react"
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import styles from '../../../../styles/layout.module.css'
import Layout from "../../../../components/layout";

// Get page data from DB
Index.getInitialProps = async (ctx) => {
  let projectName = ctx.query.name
  let pageRequest = `https://api.karsten-lloyd.dev/site.php/projects/` + projectName
  let response = await fetch(pageRequest)
  let data = await response.json()
  return { 
    project: data.project,
    screenshots: data.screenshots,
    privacyPolicy: data.privacyPolicy
  }
};


// Render screenshot images
function renderScreenshots(projectName, screenshots) {
  let render = []

  for (let screenshot of screenshots) {
    render.push(
      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={screenshot.id}>
        <img src={'/projects/' + projectName + '/' + screenshot.file} alt={screenshot.alt} title={screenshot.title} height={'400px'}/>
      </div>
    )
  }
  return (<Row>{ render }</Row>);
}


function renderLinks(project, privacyPolicy) {
  let links = []
  if (!project.link_download && !privacyPolicy) {
    return <p>No links available for this project</p>
  } else {
    if (project.link_download) {
      links.push(<li>Download: <a href={project.link_download} target="_blank" rel="noopener">Click here</a></li>)
    }
    if (privacyPolicy) {
      links.push(<li>Privacy Policy: <a href={privacyPolicy.link} target="_blank" rel="noopener">Click here</a></li>)
    }
    return (<ul>{links}</ul>)
  }
}


function Index({ project, screenshots, privacyPolicy }) {
  return (
      <>
        <Layout page='project' header={
          <div style={{ backgroundColor: project.colour }}>
            <img src={'/projects/' + project.name + '/feature.svg'} alt={project.name + 'banner'} title={project.name} height={'400px'}/>
          </div>
        }>
          <Head>
            <title>{ project.title } | Karsten Lloyd</title>
          </Head>
          <Container>
            <nav aria-label="breadcrumb">
              <ol className={`breadcrumb ${styles.breadCrumb}`}>
                <li className="breadcrumb-item" aria-current="page"><a href="/portfolio">Portfolio</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="/portfolio/projects">Projects</a></li>
                <li className="breadcrumb-item active" aria-current="page">{project.title}</li>
              </ol>
            </nav>

            <h2>Description</h2>
            <p>{ project.description }</p>
            <br/>

            <h2>Screenshots</h2>
            {renderScreenshots(project.name, screenshots)}
            <br/>

            <h2>Links</h2>
            {renderLinks(project, privacyPolicy)}
            <br/>
          </Container>
        </Layout>
      </>
  )
}

export default Index