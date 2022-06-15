import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div id="thumbProduct">
        <div>
          <span>Headwear</span>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/product/headwear"
          >
            ➡
          </Link>
        </div>
      </div>
      <div id="imageDiv">
        <h1>Image</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
