import "./assets/styles/App.css";
import "./assets/styles/coming-soon.css";
import Home from "./components/Home";
import ComingSoon from "./components/coming-soon";
import MakePayment from "./components/MakePayment";
import ConfirmPayment from "./components/ConfirmPayment";
import SuccessPage from "./components/SuccessPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/404";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coming-soon" component={ComingSoon} />
            <Route exact path="/make-payment" component={MakePayment} />
            <Route exact path="/confirm-payment" component={ConfirmPayment} />
            <Route exact path="/success" component={SuccessPage} />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
