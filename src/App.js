import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Outwear from "./routes/product/Outwear";
import Tees from "./routes/product/Tees";
import Headwear from "./routes/product/Headwear";
import Nav from "./Nav";
import Member from "./routes/Member";
import Cart from "./routes/Cart";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/product/outwear" element={<Outwear />} />
      </Routes>
      <Routes>
        <Route exact path="/product/tees" element={<Tees />} />
      </Routes>
      <Routes>
        <Route exact path="/product/headwear" element={<Headwear />} />
      </Routes>
      <Routes>
        <Route exact path="/member" element={<Member />} />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
