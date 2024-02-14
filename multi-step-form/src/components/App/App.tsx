import { useState } from "react";
import "./App.css";
import InfoForm from "../InfoForm/InfoForm";
import PlanForm from "../PlanForm/PlanForm";

function App() {
  const [formView, setFormView] = useState(0);

  return (
    <div>
      {formView === 0 && <InfoForm />}
      {formView === 1 && <PlanForm />}
      <button onClick={() => setFormView(formView + 1)}>Next Step</button>
    </div>
  );
}

export default App;
