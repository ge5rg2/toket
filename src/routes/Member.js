import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Member = () => {
  const [userinfo, isUserinfo] = useState({
    id: "",
    pw: "",
  });

  const checkIDPW = (key) => (e) => {
    isUserinfo({ ...userinfo, [key]: e.target.value });
  };

  const correctLogin = (e) => {
    e.preventDefault();
    if (
      userinfo.id === localStorage.getItem("id") &&
      userinfo.pw === localStorage.getItem("pw")
    ) {
      window.location.href = "/";
      localStorage.setItem("login", "success");
    } else if (
      userinfo.id === localStorage.getItem("id") &&
      userinfo.pw != localStorage.getItem("pw")
    ) {
      alert("Password is not correct");
      window.location.href = "/member";
    } else {
      alert("This ID is not registered");
      window.location.href = "/member";
    }
  };

  const logoutBtn = (e) => {
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  return (
    <div>
      {localStorage.getItem("login") === "success" ? (
        <div>
          <h1>Hello, {localStorage.getItem("id")}</h1>
          <button onClick={(e) => logoutBtn(e)}>Logout</button>
        </div>
      ) : (
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
            <button onClick={(e) => correctLogin(e)} id="loginBtn">
              Login
            </button>
            <Link id="createBtn" to="/member/join">
              Create Account
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default Member;
