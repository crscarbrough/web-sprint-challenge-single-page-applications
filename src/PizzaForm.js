import "./App.css";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const initialState = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  tuna: false,
  onions: false,
  spinach: false,
  mushrooms: false,
  jalapenos: false,
  bananas: false,
  instructions: "",
};

const pizzayup = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  sauce: yup.string().oneOf(["marinara", "alfredo", "nosauce"], "Pick One"),
  size: yup
    .string()
    .oneOf(["Personal", "Small", "Medium", "Large"], "Choose A Size"),
  special: yup.string(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  tuna: yup.boolean(),
  onions: yup.boolean(),
  spinach: yup.boolean(),
  mushrooms: yup.boolean(),
  jalapenos: yup.boolean(),
  bananas: yup.boolean(),
  instructions: yup.string(),
});

function PizzaForm() {
  const [isValid, setIsValid] = useState(true);
  const [form, setForm] = useState(initialState);
  const [errorState, setError] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    tuna: "",
    onions: "",
    spinach: "",
    mushrooms: "",
    jalapenos: "",
    bananas: "",
    instructions: "",
  });

  useEffect(() => {
    pizzayup.isValid(form).then((valid) => {
      setIsValid(!valid);
    });
  }, [form]);

  const validate = (e) => {
    yup
      .reach(pizzayup, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setError({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        console.log(error.errors);
        setError({
          ...errorState,
          [e.target.name]: error.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/orders", form)
      .then((res) => {
        console.log("RES", res);
      })
      .catch((err) => console.log(err.response));
    setForm(initialState);
  };

  return (
    <div>
      <h1>Build your pizza!</h1>

      <form onSubmit={formSubmit} id="pizza-form">
        <label>Your Name: </label>
        <input
          id="name-input"
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={inputChange}
        />
        {errorState.name.length > 1 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
        <p>
          <label>Choose Your Sauce:</label>
        </p>
        <input
          type="radio"
          value="marinara"
          name="sauce"
          checked={form.sauce === "marinara"}
          onChange={inputChange}
        />{" "}
        Classic Marinara
        <input
          type="radio"
          value="alfredo"
          name="sauce"
          checked={form.sauce === "alfredo"}
          onChange={inputChange}
        />{" "}
        Cheesey Alfredo
        <input
          type="radio"
          value="nosauce"
          name="sauce"
          checked={form.sauce === "nosauce"}
          onChange={inputChange}
        />{" "}
        Plain, No Sauce
        <p>
          <label htmlFor="size-dropdown">Size: </label>
          <select
            id="size-dropdown"
            name="size"
            value={form.size}
            onChange={inputChange}
          >
            <option>Choose a Size</option>
            <option value="Personal">Personal (4 Slices) </option>
            <option value="Small">Small (8 Slices) </option>
            <option value="Medium">Medium (16 Slices) </option>
            <option value="Large">Large (24 Slices) </option>
          </select>
        </p>
        <p className="error">{errorState.size}</p>
        <h2>
          <label>Top your pizza!</label>
        </h2>
        <h3>Meats:</h3>
        <p>
          <input
            id="toppings"
            type="checkbox"
            checked={form.pepperoni}
            onChange={inputChange}
            name="pepperoni"
          />
          Pepperoni
          <input
            id="toppings"
            type="checkbox"
            checked={form.sausage}
            onChange={inputChange}
            name="sausage"
          />
          Sausage
          <input
            id="toppings"
            type="checkbox"
            checked={form.bacon}
            onChange={inputChange}
            name="bacon"
          />
          Bacon
          <input
            id="toppings"
            type="checkbox"
            checked={form.tuna}
            onChange={inputChange}
            name="tuna"
          />
          Tuna
        </p>
        <h3>Vegetables</h3>
        <p>
          <input
            id="toppings"
            type="checkbox"
            checked={form.onions}
            onChange={inputChange}
            name="onions"
          />
          Onions
          <input
            id="toppings"
            type="checkbox"
            checked={form.spinach}
            onChange={inputChange}
            name="spinach"
          />
          Spinach
          <input
            id="toppings"
            type="checkbox"
            checked={form.mushrooms}
            onChange={inputChange}
            name="mushrooms"
          />
          Mushrooms
          <input
            id="toppings"
            type="checkbox"
            checked={form.jalapenos}
            onChange={inputChange}
            name="jalapenos"
          />
          Jalapenos
        </p>
        <h2>Feeling weird?</h2>
        <input
          id="toppings"
          type="checkbox"
          checked={form.bananas}
          onChange={inputChange}
          name="bananas"
        />
        Bananas
        <p className="instructions">
          <label>Any special instructions?</label>
          <textarea
            name="instructions"
            id="special-text"
            placeholder="Tell us what to do"
            value={form.instructions}
            onChange={inputChange}
          />
        </p>
        <button
          name="order-button"
          id="order-button"
          disabled={isValid}
          type="submit"
        >
          🍕 Submit Order! 🍕
        </button>
      </form>
    </div>
  );
}

export default PizzaForm;
