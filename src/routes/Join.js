import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [id, isId] = useState("");
  const [pw, isPw] = useState("");
  const [repw, isRePw] = useState("");
  const [checkIDPW, isCheckIDPW] = useState(false);

  const idSet = (e) => {
    isId(e.target.value);
  };
  const pwSet = (e) => {
    isPw(e.target.value);
  };

  const repwSet = (e) => {
    isRePw(e.target.value);
  };
  const createBtn = (e) => {
    e.preventDefault();
    if (id.length > 0 && pw === repw && pw.length > 0) {
      alert("Sucessfull!");
      console.log(id, pw);
      localStorage.setItem("id", id);
      localStorage.setItem("pw", pw);
      window.location.href = "/member";
    } else {
      alert("Please reCheck requirement");
    }
  };

  const checkBtn = (e) => {
    e.preventDefault();
    alert(localStorage.getItem("id"));
    alert(localStorage.getItem("pw"));
  };
  return (
    <div>
      <form>
        <ul>
          <li>
            <label>ID</label>
            <input
              onChange={(e) => idSet(e)}
              required
              type="text"
              maxLength="10"
            ></input>
            {id.length > 0 ? <span>✅</span> : ""}
          </li>
          <li>
            <label>Password</label>
            <input
              onChange={(e) => pwSet(e)}
              required
              type="password"
              minLength="4"
              maxLength="10"
            ></input>
            {pw.length >= 4 && pw.length <= 10 ? (
              <span>✅</span>
            ) : (
              <span>You should satisfy to requirement</span>
            )}
          </li>
          <li>
            <label>Password Check</label>
            <input
              onChange={(e) => repwSet(e)}
              required
              type="password"
              minLength="4"
              maxLength="10"
            ></input>
            {pw === repw && pw.length > 0 ? <span>✅</span> : <span>❎</span>}
          </li>
        </ul>
        <button onClick={(e) => createBtn(e)}>Create Account</button>
        <button onClick={(e) => checkBtn(e)}>Check your account</button>
      </form>
    </div>
  );
};

export default Join;
