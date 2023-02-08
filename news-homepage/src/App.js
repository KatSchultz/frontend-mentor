import "./App.css";
import Featured from "./components/Featured";

import AdditionalStories from "./components/AdditionalStories";
import New from "./components/New";

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
