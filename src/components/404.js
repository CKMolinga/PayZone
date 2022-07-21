import { Link } from "react-router-dom";
import NotFound from "../assets/PageNotFound.svg";

const NotFoundPage = () => {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <h3 className="title">Page Not Found!</h3>
        <p>
          Ooops!... It seems you are lost here, page not found. Please go back to home.
        </p>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>

      <div className="image">
        <img src={NotFound} alt="coming-soon" />
      </div>
    </div>
  );
};

export default NotFoundPage;
