import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <img src="https://media.istockphoto.com/vectors/best-italian-pizza-banner-with-ribbon-tomato-cheese-mozzarella-flour-vector-id1253496654?k=20&m=1253496654&s=170667a&w=0&h=RnlWrLTh386Gm18QnUmLKe3b47deOI9z1u37hMo_0gI="></img>
      <nav>
        <h1> Hungry? </h1>
        <Link to="/pizza">
          <p>
            <button id="order-pizza">
              Yes! SO Hungry!! I need to order some pizza!
            </button>
          </p>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
