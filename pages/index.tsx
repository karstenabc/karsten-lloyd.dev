import Head from "next/head";
import AdminLayout from "../components/layouts/homeLayout";
import { Jumbotron } from "../components/index/jumbotron";
import { IconRow } from "../components/index/iconRow";

const Home = () => (
  <>
    <Head>
      <title>Karsten Lloyd</title>
      <meta
        key="description"
        name="description"
        content="Generated by create next app"
      />
      <meta
        key="responsive"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link key="favicon" rel="icon" href="/favicon.ico" />
    </Head>

    <style jsx>{`
      .waveContainer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15vw;
        max-height: 25vh;
      }
      @media (max-height: 30em) {
        .waveContainer {
          display: none;
        }
      }

      .waves > use {
        animation: move-forever 12s linear infinite;
      }
      .waves > use:nth-child(1) {
        animation-delay: -2.4s;
      }
      .waves > use:nth-child(2) {
        animation-delay: -2s;
        animation-duration: 5s;
      }

      @keyframes move-forever {
        0% {
          transform: translate(-90px, 0%);
        }
        100% {
          transform: translate(85px, 0%);
        }
      }
    `}</style>

    <svg
      className="waveContainer"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="waves">
        <use xlinkHref="#wave" x="0" y="0" fill="#218380" />
        <use xlinkHref="#wave" x="50" y="3" fill="#42a5a2" />
      </g>
    </svg>

    <div
      className="home"
      style={{
        backgroundColor: "#73D2DE",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <Jumbotron />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="row">
              <div className="text-center col-12">
                <IconRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

Home.layout = AdminLayout;

export default Home;
