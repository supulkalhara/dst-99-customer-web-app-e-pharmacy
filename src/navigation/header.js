import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/e-pharmacy.svg";
import { LogoutUser } from "../firebase/firebase";
import "./header.css";

function logout () {
  LogoutUser();
}

function Header() {
  var myUser=[];
  var isAuth = false;
  const LOCAL_STORAGE_KEY = "userlog";
  const User_details = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // json.parse(string) -> all string convert to an object 
  if (User_details){
    myUser = User_details;
    isAuth = ( myUser && myUser.loggedIn );
  }else{
    console.log("Local storage has not your loging details");
  }
  
  if(isAuth){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img src={logo1} width="200" height="40" alt=""/></a>
      <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbar2" aria-controls="navbar2" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar2">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="nav-link" href="#aboutus">About Us</a></li>
        </ul>
        <button className="btn btn-outline-primary my" onClick={logout} >Logout</button>
      </div>
    </nav>
    );
  }else{
    return (
      
<nav className="navbar navbar-expand-lg navbar-light  bg-light">
<a className="navbar-brand" href="#"><img src={logo1} width="200" height="40" alt=""/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" >
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbar">
  <ul className="navbar-nav mr-auto">
  <li className="nav-item"><a className="nav-link" href="#aboutus">About Us</a></li>
  </ul>
  <Link to="/login"><button className="btn btn-outline-primary my" >Login</button></Link>
  <Link to="/signUp"><button className="btn btn-outline-primary my" >Sign up</button></Link>
</div>
</nav> 
    
    );
  }

}

export default Header;

