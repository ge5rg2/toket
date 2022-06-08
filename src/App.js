import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Outwear from "./routes/product/Outwear";
import Tees from "./routes/product/Tees";
import Headwear from "./routes/product/Headwear";
import Nav from "./Nav";
import Member from "./routes/Member";
import Cart from "./routes/Cart";
import Join from "./routes/Join";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Nav />
          <section>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/product/outwear" element={<Outwear />} />
              <Route path="/product/tees" element={<Tees />} />
              <Route path="/product/headwear" element={<Headwear />} />
            </Routes>
            <Routes>
              <Route exact path="/member" element={<Member />} />
              <Route exact path="/member/join" element={<Join />} />
            </Routes>
            <Routes>
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
