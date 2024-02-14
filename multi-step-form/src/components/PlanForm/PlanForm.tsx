interface Props {
  interval: string;
  setInterval: (interval: string) => void;
}

const PlanForm = ({ interval, setInterval }: Props) => {
  const plans = [
    {
      name: "Arcade",
      monthlyPrice: "$9/mo",
      yearlyPrice: "$90/yr",
    },
    {
      name: "Advanced",
      monthlyPrice: "$12/mo",
      yearlyPrice: "$120/yr",
    },
    { name: "Pro", monthlyPrice: "$15/mo", yearlyPrice: "$150/yr" },
  ];

  return (
    <form action="">
      <h2>Select Your Plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      {plans.map((plan) => (
        <div>
          <h3>{plan.name}</h3>
          <p>{interval === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</p>
        </div>
      ))}
      <input
        type="checkbox"
        name="interval"
        id=""
        onClick={() =>
          setInterval(interval === "monthly" ? "yearly" : "monthly")
        }
      />
      <span className="slider"></span>
    </form>
  );
};

export default PlanForm;
