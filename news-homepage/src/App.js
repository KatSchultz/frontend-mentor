import logo from "./logo.svg";
import "./App.css";
import Featured from "./components/Featured";
import New from "./components/New";
import AdditionalStories from "./components/AdditionalStories";

function App() {
  return (
    <div className="App">
      <Featured />
      <New />
      <AdditionalStories />
    </div>
  );
}

export default App;
