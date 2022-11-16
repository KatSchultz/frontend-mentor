import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Spending from "./components/Spending";
import Total from "./components/Total";

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="content">
        <Spending />
        <Total />
      </div>
    </div>
  );
}

export default App;
