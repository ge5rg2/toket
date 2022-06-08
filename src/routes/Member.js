import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Join from "./Join";

const Member = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <ul>
          <li>
            <label>ID</label>
            <input required type="text" maxLength="10"></input>
          </li>
          <li>
            <label>Password</label>
            <input
              required
              type="password"
              minLength="4"
              maxLength="10"
            ></input>
          </li>
        </ul>
        <Link id="loginBtn" to="/member/none">
          Login
        </Link>
        <Link id="createBtn" to="/member/join">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Member;
