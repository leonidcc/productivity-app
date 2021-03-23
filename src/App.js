//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
//Redux
import { Provider } from "react-redux";
import generateStore from "./redux/store";
//Components
import Header from "./components/Header/index";
import CardPost from "./components/CardPost/index";
import Home from "./views/Home/Home";
import Posts from "./views/Postes/Posts";
import Board from "./views/Board/Board";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className="app__body">
          <Header />
          <Switch>
            <Route path="/board/:slug">
              <CardPost />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/posteos">
              <Posts />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
