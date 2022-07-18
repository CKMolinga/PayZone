import MTN from "../assets/mtn_momo.png";
import Orange from "../assets/Orange_Money.png";
import WU from "../assets/Western-Union.png";
import illustration from "../assets/illustration.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <header className="App-header">
        <div className="left-header">
          <h2 className="logo">
            Pay<span className="logo-span">Zone</span>
          </h2>
        </div>
        <div className="middle-header">
          <ul className="menu">
            <Link to="/coming-soon">
              <li>How it works</li>
            </Link>
            <Link to="/coming-soon">
              <li>Company</li>
            </Link>
            <Link to="/coming-soon">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="right-header">
          <Link to="/coming-soon">Login</Link>
          <Link to="/coming-soon" className="highlighted">
            Sign Up
          </Link>
        </div>
      </header>
      <main className="main-section">
        <section className="left-section">
          <div className="hero-section">
            <h2>Pay Anyone,</h2>
            <h2 className="underlined-header">Anywhere.</h2>
          </div>
          <div className="about">
            <p>
              Make payment smooth as breeze. Pay family, friends and bills for
              less-at home and abroad.
            </p>
          </div>
          <div className="get-started">
            <Link to="/make-payment" span-parent>
              Send Money <span class="material-icons arrow">arrow_forward</span>
            </Link>
          </div>
          <div className="partners">
            <h3>Partners</h3>
            <div className="partner-logos">
              <img src={Orange} className="partner-logo" alt="logo" />
              <img src={MTN} className="partner-logo" alt="logo" />
              <img src={WU} className="partner-logo" alt="logo" />
            </div>
          </div>
        </section>

        <section className="right-section">
          <div className="illustration">
            <img
              src={illustration}
              className="illustration-img"
              alt="illustration_image"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
