import { ChangeEvent, useState } from "react";

const InfoForm = () => {
  const [input, setInput] = useState({ name: "", email: "", phone: "" });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, ...{ [e.target.name]: e.target.value } });
  };

  return (
    <form action="">
      <h2>Personal Info</h2>
      <p>Please provide your name, email, address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="e.g. Stephen King"
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={changeHandler}
        type="email"
        name="email"
        id=""
        placeholder="e.g. stephenking@lorem.com"
      />
      <label htmlFor="phone">Phone</label>
      <input
        onChange={changeHandler}
        type="tel"
        name="phone"
        id=""
        placeholder="e.g. +1 234 567 890"
      />
    </form>
  );
};

export default InfoForm;
