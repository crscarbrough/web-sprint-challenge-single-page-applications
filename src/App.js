import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Pizza Pizza</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Order Pizza!</Link>
        </nav>
      </header>
      <p>You can remove this code and create your own header</p>
    </div>
  );
};
export default App;
