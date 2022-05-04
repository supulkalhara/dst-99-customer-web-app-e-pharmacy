import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import "./footer.css";
import "./icon.css";

function Footer() {
  return (
  
    <footer className="footer">
      <div className="container">

        <div className="d-flex flex-column align-items-center">
          <h3 className="fotext set">E-Pharmacy</h3>
          <p className="fotext set" id="aboutus">
          Your favourite online pharmacy store.We offer onsite delivery and your
          health is our priority
          </p>
        </div>


        <div className="d-flex flex-column align-items-center set">
          <div className="template-demo"> 
          <a type="button" className="btn btn-social-icon btn-outline-facebook" href="http://facebook.com/"><img src={facebook} alt="" /></a> 
          <a type="button" className="btn btn-social-icon btn-outline-youtube" href="http://youtube.com/"><img src={youtube} alt="" /></a> 
          <a type="button" className="btn btn-social-icon btn-outline-twitter" href="http://twitter.com/"><img src={twitter} alt="" /></a> 
          <a type="button" className="btn btn-social-icon btn-outline-linkedin" href="http://linkedin.com/"><img src={linkedin} alt="" /></a> 
          <a type="button" className="btn btn-social-icon btn-outline-instagram" href="http://instagram.com/"><img src={instagram} alt="" /></a> 
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="col-auto">
              <p className="fotext">© Copyright 2022 DST</p>
          </div>
        </div>

      </div>
    </footer>

  );
}

export default Footer;
