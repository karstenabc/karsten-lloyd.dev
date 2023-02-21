import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.navbarContainer}`}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              className="d-inline-block align-text-top"
              src="/logo.svg"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </Link>
          Karsten Lloyd
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
