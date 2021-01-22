import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/index";
import Card from "./components/Card/index";

function App() {
  return (
    <div className="app__body">
      <Header />
      <div className="container">
        {/* Aqui Enrutador */}
        {/* Vistas */}
        <Card />
      </div>
    </div>
  );
}

export default App;
