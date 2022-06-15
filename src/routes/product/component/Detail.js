import { useEffect, useState } from "react";
import styled from "styled-components";
import dummyProducts from "../../static/dummyData";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();
  let item_id = --id;
  return (
    <div>
      <h1>Detail {item_id}</h1>
      <img src={dummyProducts[item_id].picture}></img>
    </div>
  );
};

export default Detail;
