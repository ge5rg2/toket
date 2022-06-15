import { useEffect, useState } from "react";
import styled from "styled-components";
import Detail from "./component/Detail";
import { Link } from "react-router-dom";
import dummyProducts from "../static/dummyData";

const Imgcontainer = styled.img`
  width: 10em;
  height: 12em;
`;

const Headwear = () => {
  return (
    <div>
      <h1>Headwear</h1>
      <div>
        {dummyProducts.map((el) => {
          return (
            <Link to={`/product/detail/${el.id}`}>
              <Imgcontainer src={el.picture}></Imgcontainer>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Headwear;
