import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Login(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function validation() {
    if (
      email.replace("@", "") !== "" &&
      password !== "" &&
      email.includes("@")
    ) {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      //   localStorage.setItem("email", email);
      //   setEmail("");
      //   setPassword("");
      //   setName("");
      //   props.setIslogin(true);
    } else {
      alert("Enter valid Email and password");
    }
  }
  return (
    <div className="login">
      {props.islogin ? <Redirect to="/" /> : null}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          <img src="https://img.icons8.com/fluent/38/000000/video-call.png" />{" "}
          <span id="main-brand">Vcon</span>
          <span id="main-brand-room">Room</span>
        </a>
      </nav>
      <div style={{ display: "flex" }} className="login_content">
        <div className="col-md-6 left">
          <img src="/vc_login.jpg" width="100%" />
        </div>
        <div className="col-md-6 right">
          <div className="login_form">
            <img
              src="https://gawvs.in//assets/img/login.png"
              width="82%"
              id="login_img"
              style={{ margin: "0 10%", opacity: "0.9" }}
            />

            <h3 style={{ fontWeight: "400" }}>Welcome Back :)</h3>
            <p>
              To keep connected with us please SignUp with your personal
              information by user Name , email address and password.
            </p>

            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">
                  <img src="https://img.icons8.com/ios/22/000000/important-mail.png" />
                </span>
              </div>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email address "
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">
                  <img src="https://img.icons8.com/ios/22/000000/privacy.png" />
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="Enter your password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span id="extra">Forgot your login details ? Get help Signup</span>
            <div className="form-inline">
              <button
                className="btn btn-success signup-btn  my-2 my-sm-0"
                type="submit"
                onClick={() => {
                  validation();
                }}
              >
                Login
              </button>
              <Link to={`/signup`} className="nav-link">
                <button type="button" class="btn btn-light">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//https://freepngimg.com/thumb/abstract/30898-3-abstract-transparent.png
//https://pngimage.net/wp-content/uploads/2018/05/abstract-png-transparent-6.png
//https://i.pinimg.com/originals/89/00/4b/89004be943011dffa76598bd33170660.png
//https://www.clipartkey.com/mpngs/m/25-258654_bagel-clipart-plate-rainbow-logo-png.png
//<img src="https://gawvs.in//assets/img/login.png"  width="80%" height="80%"  />
