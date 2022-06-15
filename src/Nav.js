import { Link } from "react-router-dom";
import styled from "styled-components";

const Navli = styled.ul`
  text-decoration: none;
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
          <li>Home</li>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/product/headwear"
        >
          <li>Headwear</li>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/member"
        >
          <li>Account</li>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/cart"
        >
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
