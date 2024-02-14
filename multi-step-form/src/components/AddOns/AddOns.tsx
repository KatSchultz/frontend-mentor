import { ChangeEvent, useState } from "react";

interface Props {
  interval: string;
}

const AddOns = ({ interval }: Props) => {
  const [addOns, setAddOns] = useState([
    {
      name: "Online service",
      description: "Access to multiplayer games",
      yearlyPrice: "$10/yr",
      monthlyPrice: "+$1/mo",
      selected: true,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of could save",
      yearlyPrice: "$20/yr",
      monthlyPrice: "+$2/mo",
      selected: true,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      yearlyPrice: "$20/yr",
      monthlyPrice: "+$2/mo",
      selected: false,
    },
  ]);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const index = addOns.findIndex((elem) => elem.name === e.target.name);

    if (index) {
      const item = addOns[index];
      item.selected = !item.selected;
      setAddOns((prev) => {
        const updatedItems = [...prev];
        updatedItems[index] = item;
        return updatedItems;
      });
    }
  };

  return (
    <form action="">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {addOns.map((item) => (
        <div key={item.name}>
          <input
            type="checkbox"
            name={item.name}
            id=""
            // checked={item.selected}
            defaultChecked={item.selected}
            onChange={() => handleCheck}
          />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <h4>
            {interval === "monthly" ? item.monthlyPrice : item.yearlyPrice}
          </h4>
        </div>
      ))}
    </form>
  );
};

export default AddOns;
