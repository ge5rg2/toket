import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [userinfo, isUserinfo] = useState({
    id: "",
    pw: "",
    repw: "",
  });

  const handleInputValue = (key) => (e) => {
    isUserinfo({ ...userinfo, [key]: e.target.value });
  };

  const createBtn = (e) => {
    e.preventDefault();
    if (
      userinfo.id.length > 0 &&
      userinfo.pw === userinfo.repw &&
      userinfo.pw.length > 0
    ) {
      alert("Sucessfull!");
      console.log(userinfo.id, userinfo.pw);
      localStorage.setItem("id", userinfo.id);
      localStorage.setItem("pw", userinfo.pw);
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
              onChange={handleInputValue("id")}
              required
              type="text"
              maxLength="10"
            ></input>
            {userinfo.id.length > 0 ? <span>✅</span> : ""}
          </li>
          <li>
            <label>Password</label>
            <input
              onChange={handleInputValue("pw")}
              required
              type="password"
              minLength="4"
              maxLength="10"
            ></input>
            {userinfo.pw.length >= 4 && userinfo.pw.length <= 10 ? (
              <span>✅</span>
            ) : (
              <span>You should satisfy to requirement</span>
            )}
          </li>
          <li>
            <label>Password Check</label>
            <input
              onChange={handleInputValue("repw")}
              required
              type="password"
              minLength="4"
              maxLength="10"
            ></input>
            {userinfo.pw === userinfo.repw && userinfo.pw.length > 0 ? (
              <span>✅</span>
            ) : (
              <span>❎</span>
            )}
          </li>
        </ul>
        <button onClick={(e) => createBtn(e)}>Create Account</button>
        <button onClick={(e) => checkBtn(e)}>Check your account</button>
      </form>
    </div>
  );
};

export default Join;
