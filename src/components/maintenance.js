import { Link } from "react-router-dom";
import BugFix from "../assets/Bug fixing-bro.svg";

const MaintainancePage = () => {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <h3 className="title">Under Maintenance!</h3>
        <p>
          Ooops!... Something went wrong, we are currently working on it. Please
          contact support or try again later.
        </p>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>

      <div className="image">
        <img src={BugFix} alt="coming-soon" />
      </div>
    </div>
  );
};

export default MaintainancePage;
