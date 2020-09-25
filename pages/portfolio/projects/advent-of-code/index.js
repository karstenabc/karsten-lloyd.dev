import React from "react"
import Link from 'next/link'
import styles from '../../../../styles/layout.module.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from "../../../../components/template"
import Tile from '../../../../components/tile'


export default function page() {
  const title = "Advent of Code | Karsten Lloyd";
  const section = "portfolio";
  const heading = "ADVENT OF CODE";
  const subheading = <>See my solutions for <a href="#languages">2018</a> and <a href="#education">2019</a></>;

  const breadcrumb = (
      <>
        <nav aria-label="breadcrumb">
          <ol className={`breadcrumb ${styles.breadCrumb}`}>
            <li className="breadcrumb-item"><Link href="/portfolio"><a>Portfolio</a></Link></li>
            <li className="breadcrumb-item active" aria-current="page">Advent of Code</li>
          </ol>
        </nav>
      </>
  );

  const content = (
      <>
        <h2>YEARS</h2>
        <p>View my Advent of Code solutions for different years written in various languages.</p>
        <br/>
        <Col>
          <Row>

            <div className="col-4">
              { Tile("2018", "JavaScript", "/portfolio/projects/advent-of-code/2018") }
            </div>

            <div className="col-4">
              { Tile("2019", "PYTHON", "2019/") }
            </div>
          </Row>
        </Col>
      </>
  );

  return Page(title, section, heading, subheading, breadcrumb, content);
}
