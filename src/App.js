//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Redux
import { Provider } from "react-redux";
import generateStore from "./redux/store";
//Components
import Header from "./components/Header/index";
import Home from "./views/Home/Home";
import Board from "./views/Board/Board";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
