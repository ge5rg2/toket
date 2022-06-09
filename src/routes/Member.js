import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Member = () => {
  const [userinfo, isUserinfo] = useState({
    id: "",
    pw: "",
  });
  const checkIDPW = (key) => (e) => {
    isUserinfo({ ...userinfo, [key]: e.target.value });
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <ul>
          <li>
            <label>ID</label>
            <input
              onChange={checkIDPW("id")}
              required
              type="text"
              maxLength="10"
            ></input>
          </li>
          <li>
            <label>Password</label>
            <input
              onChange={checkIDPW("pw")}
              required
              type="password"
              minLength="4"
              maxLength="10"
            ></input>
          </li>
        </ul>
        {userinfo.id === localStorage.getItem("id") &&
        userinfo.pw === localStorage.getItem("pw") ? (
          <Link id="loginBtn" to="/">
            Login
          </Link>
        ) : (
          <Link id="loginBtn" to="/member/none">
            Login
          </Link>
        )}
        <Link id="createBtn" to="/member/join">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Member;
