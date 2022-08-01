import MTN from "../assets/mtn_momo.png";
import Orange from "../assets/Orange_Money.png";
import illustration from "../assets/illustration.png";

// import { ProtectedRoute } from "../protectedRoute";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <header className="App-header">
        <div className="left-header">
          <h2 className="logo">
            PAY<span className="logo-span">ZONE</span>
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
            <h2 className="hero-heading">Make Payments,</h2>
            <h2 className="hero-heading underlined-header">A Breeze.</h2>
          </div>
          <div className="about">
            <p>
              Join thousands of businesses - from savy start-ups to expanding
              enterprise, start collecting payments with powerful technology.
            </p>
          </div>
          <div className="get-started">
            <Link to="/make-payment" span-parent>
              Make Payment{" "}
              <span class="material-icons arrow">arrow_forward</span>
            </Link>
          </div>
          <div className="partners">
            <h3>Partners</h3>
            <div className="partner-logos">
              <img src={Orange} className="partner-logo" alt="logo" />
              <img src={MTN} className="partner-logo" alt="logo" />
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
