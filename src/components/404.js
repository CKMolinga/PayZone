import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
      <div className="coming-soon-container">
        <h1 className="coming-soon">404 Page Not Found!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  };
  
  export default NotFoundPage;
  