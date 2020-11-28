import React from 'react'
import Head from 'next/head'
import styles from '../styles/layout.module.css'
import fonts from '../styles/font.module.css'

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const siteTitle = 'Karsten Lloyd\'s Site'


function nav(title, path, active) {
  if (active) {
    return <Nav.Link href={path} className={styles.navActive}>{title}</Nav.Link>
  } else {
    return <Nav.Link href={path} style={{color: 'white'}}>{title}</Nav.Link>
  }
}


export default function Layout({ children, page, header }) {
  return (
      <div>
        <Head>
          {/*<link rel="icon" href="/favicon.ico" />*/}
          <meta
              name="Karsten Lloyd"
              content="Online portfolio"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="viewport" content="width=device-width, user-scalable=false;" />
        </Head>

        <Navbar className={styles.nav} collapseOnSelect expand="sm" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" className={styles.navLinks}>
              { nav("HOME", "/", page === "home") }
              { nav("PORTFOLIO", "/portfolio", page === "portfolio") }
              { nav("CONTACT", "/contact", page === "contact") }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        { page !== 'home' && 
          <div className={styles.title + ' ' + fonts.title}>
            { header }
          </div>
        }
        <main>{children}</main>
      </div>
  )
}
