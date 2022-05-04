import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import SubHeader from "../../components/subHeader/subHeader";
import { signupUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [errmsg, seterr] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    //error handling
    if (email && password && confirmPassword && name && contact) {
      if (password === confirmPassword) {
        let isnum = /^\d+$/.test(contact);
        if (isnum) {
          var count = contact.length;
          if (count === 10) {
            signupUser(email, password, name, contact, navigate, seterr);
          } else {
            seterr("Inappropiate contact number");
          }
        } else {
          seterr("Inappropiate contact number");
        }
      } else {
        seterr("Passwords are not matching");
      }
    } else {
      seterr("All entries should be filled");
    }
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
          <div className="img imgsign"></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100"><h3 className="mb-4">Sign Up</h3> </div>
                </div>
                  <form action="#" className="signin-form">
                    <div className="error">
                      <p className="text-danger">{errmsg}</p>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label" >Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => {setName(e.target.value); }} required/>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" >Your Email</label>
                      <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e) => {setEmail(e.target.value); }} required/>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" >Contact Number</label>
                      <input type="text" className="form-control" placeholder="Contact Number" value={contact} onChange={(e) => {setContact(e.target.value); }} required/>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" >Password</label>
                      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value); }} required/>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" >Confirm Password</label>
                      <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value); }} required/>
                    </div>
                    <div className="form-group">
                      <button type="submit" onClick={signUp} className="form-control btn btn-info rounded submit px-3" >
                      Sign Up
                      </button>
                    </div>
                </form>
                <p className="text-center">
                  Already Have An Account?
                  <Link style={{ textDecoration: "none" }} to="/login">
                  <span className="signUp">Log In</span>
                </Link>
                </p>
             </div>
          </div>
        </div>
    </div>
</div>

  );
}


