import "./App.css";
import math from "./GanitImages/image6.jpg"
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Ganit is fun, let's play with it..!!!!</h1>
      <Link to="/Search">Let's Get Started...</Link>
      <img src={math} alt="This is Math equations."/>
    </div>
  );
}

export default App;
