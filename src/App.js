import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const App = () => {
  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
  };

  return (
    <div className="App">
      <header>
        <h1>Pizza Pizza</h1>
        <nav>
          <Link id="order-pizza" to="/pizza">
            Hungry? Start your order!
          </Link>
          <Link id="pizza-form" to="/pizza">
            So Hungrrryyyyyy!
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <form>
            <label>
              <h3>Name:</h3>
              <input
                placeholder="Enter Name"
                name="name"
                type="text"
                id="name-input"
              />
            </label>
            <label>
              <h3>Pizza Size</h3>
              <select id="size-dropdown" onChange={onChange} name="crust-size">
                <option value=""> -Select a size -</option>
                <option value="personal">Personal</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
            <div className="toppings">
              <h3>Toppings</h3>
              <h4>Meats:</h4>
              <label>Pepperoni</label>
              <input type="checkbox" name="pepperoni" />
              <label>Sausage</label>
              <input type="checkbox" name="sausage" />
              <label>Bacon</label>
              <input type="checkbox" name="bacon" />
              <label>Tuna</label>
              <input type="checkbox" name="tuna" />
              <h4>Vegetables:</h4>
              <label>Tomatoes</label>
              <input type="checkbox" name="tomatoes" />
              <label>Spinach</label>
              <input type="checkbox" name="spinach" />
              <label>Onions</label>
              <input type="checkbox" name="onions" />
              <label>Mushrooms</label>
              <input type="checkbox" name="mushrooms" />
            </div>
            <label>
              <h3>Special Instructions:</h3>
              <input
                placeholder="Have any special requests?"
                name="instructions"
                type="text"
                id="special-text"
              />
            </label>
            <button id="order-button"> 🍕 Submit Order 🍕</button>
          </form>
        </Route>
        <Route exact path="/pizza"></Route>
      </Switch>
    </div>
  );
};
export default App;
