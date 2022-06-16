import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import dummyImages from "./static/dummyImage";
import styled from "styled-components";
import style from "./Home.module.scss"

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
        <div className={`${style.body}`}>
          <div className={`${style.slider}`}>
            <div className={`${style.slide_track}`}>
          {dummyImages.map((el) => {
            return (
                  <div className={`${style.slide}`}>
                    <img
                      src={el.picture}
                      style={{ width: "100%", height: "100%", alt: "" }}
                    ></img>
                  </div>
            );
          })}
          </div>
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
