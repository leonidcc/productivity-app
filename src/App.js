import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/index";
import Home from "./views/Home/Home";
import Board from "./views/Board/Board";

function App() {
  return (
    <Router>
      <div className="app__body">
        <Header />
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
