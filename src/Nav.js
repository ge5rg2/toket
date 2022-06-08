import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/product/outwear">
          <li>Outwear</li>
        </Link>
        <Link to="/product/tees">
          <li>Tees</li>
        </Link>
        <Link to="/product/headwear">
          <li>Headwear</li>
        </Link>
        <Link to="/member">
          <li>Account</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
