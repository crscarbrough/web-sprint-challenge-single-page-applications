import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const App = () => {
  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
  };

  return (
    <div className="App">
      <h1>Pizza Pizza</h1>
      <nav>
        <Link id="order-pizza" to="/pizza">
          Home
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pizza" component={PizzaForm} />
      </Switch>
    </div>
  );
};
export default App;
