import { useState } from "react";
import "./App.css";
import InfoForm from "../InfoForm/InfoForm";
import PlanForm from "../PlanForm/PlanForm";
import AddOns from "../AddOns/AddOns";
import FinishingUp from "../FinishingUp/FinishingUp";

function App() {
  const [formView, setFormView] = useState(0);
  const [interval, setInterval] = useState("monthly");
  const viewNextStep = () => {
    if (formView < 3) {
      setFormView(formView + 1);
    }
  };
  const viewPrevStep = () => {
    if (formView > 0) {
      setFormView(formView - 1);
    }
  };

  return (
    <div>
      {formView === 0 && <InfoForm />}
      {formView === 1 && (
        <PlanForm interval={interval} setInterval={setInterval} />
      )}
      {formView === 2 && <AddOns interval={interval} />}
      {formView === 3 && <FinishingUp />}
      <div>
        <button onClick={viewPrevStep}>Go Back</button>
        <button onClick={viewNextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default App;
