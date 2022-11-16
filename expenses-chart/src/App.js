import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Spending from "./components/Spending";
import Total from "./components/Total";
import { useEffect, useState } from "react";
import { getData } from "./services";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  const totalSpending = data.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="App">
      <Heading />
      <div className="content">
        <Spending data={data} />
        <Total totalSpending={totalSpending} />
      </div>
    </div>
  );
}

export default App;
