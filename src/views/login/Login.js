import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import SubHeader from "../../components/subHeader/subHeader";
import { LoginUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErr] = useState("");

  const login = (e) => {
    e.preventDefault();
    LoginUser(email, password, navigate, setErr);
  };

  return (

<div className="container">
  <div className="row justify-content-center">
      <div className="col col-md-12 text-center mb-5">
        <SubHeader />
      </div>
  </div>
    <div className="row justify-content-center ">
        <div className="col-md-12 col-lg-10">
          <div className="wrap d-md-flex">
          <div className="img imgLog"></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100"><h3 className="mb-4">Sign In</h3> </div>
                </div>
                  <form action="#" className="signin-form">
                    <div className="error">
                      <p className="text-danger">{errmsg}</p>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label" >Your Email</label>
                        <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e) => {setEmail(e.target.value); }} required/>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" >Password</label>
                      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value); }} required/>
                    </div>
                    <div className="form-group">
                      <button type="submit" onClick={login} className="form-control btn btn-info rounded submit px-3" >
                      Login
                      </button>
                    </div>
                </form>
                <p className="text-center">
                  Not a member?
                  <Link style={{ textDecoration: "none" }} to="/signUp">
                  <span className="signUp">Sign Up</span>
                  </Link>
                </p>
             </div>
          </div>
        </div>
    </div>
</div>

  );
}
