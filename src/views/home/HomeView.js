import React from "react";
import Upper from "../../components/upper/upper";
import Footer from "../../components/footer/footer";
import dotLogo from "../../assets/images/dot.svg";
import secOneImg from "../../assets/images/secOneImg.svg";
import secTwoImg from "../../assets/images/sectwo.png";
import secThreeImg from "../../assets/images/secThreeImg.svg";
import "./HomeView.css";

export function HomeView() {
  return (
    <div className="homeView">
      <Upper />

      <div className="middle"><h3>Key Benefits</h3></div>

      <div className="container">

        <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 order-sm-last col-md-3">
                <div className="media">
                  <div className="media-body">
                    <div className="d-none d-md-block " ><img src={secOneImg} alt="" className="d-flex mr-3 img-thumbnial align-self-center" /></div>
                  </div>
                </div> 
            </div>
            <div className="col-12 col-md order-md-first col-lg-5">
                <div className="row">
                  <h4>All your medicine needs in one place</h4>
                </div>
                <div className="d-flex points">
                  <img className="dot" src={dotLogo} alt=""/>
                  <p>We have drugs for special case treatments</p>
                </div>
                <div className="d-flex points">
                  <img className="dot" src={dotLogo} alt="" />
                  <p>Get notified when your drug is available</p>
                </div>
            </div>
        </div>
        
        <div className="row row-content align-items-center">
          <div className="col-12 col-md order-sm-last col-lg-4">
            <div className="row">
              <h4>Get your drugs at your doorstep</h4>
            </div>
            <div className="d-flex points">
              <img className="dot" src={dotLogo} alt="" />
              <p>Get straight delivery to your doorstep</p>
            </div>
            <div className="d-flex points">
              <img className="dot" src={dotLogo} alt="" />
              <p>We deliver within 24hrs of request</p>
            </div>
            <div className="d-flex points">
              <img className="dot" src={dotLogo} alt="" />
              <p>We guarantee speedily response</p>
            </div>
          </div>
          <div className="col col-sm-9 order-md-first col-lg-6">
              <div className="media">
                  <div className="media-body">
                    <div className="d-none d-md-block" ><img src={secTwoImg} alt="" className="d-flex mr-3 img-thumbnial align-self-center section2img"  /></div>
                  </div>
              </div>
          </div>
        </div>

        <div className="row row-content align-items-center">
          <div className="col-12 col-sm-4 order-sm-last col-md-3">
              <div className="media">
                <div className="media-body">
                  <div className="d-none d-md-block" ><img src={secThreeImg} alt="" className="d-flex mr-3 img-thumbnial align-self-center"  /></div>
                </div>
              </div> 
          </div>
          <div className="col-12 col-md order-md-first col-lg-5">
              <div className="row">
                <h4>Set up your profile and get refill easily</h4>
              </div>
              <div className="d-flex points">
                <img className="dot" src={dotLogo} alt="" />
                <p>When you are a member your refill is easier</p>
              </div>
              <div className="d-flex points">
                <img className="dot" src={dotLogo} alt="" />
                <p>With one click your medicine is on it's way</p>
              </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
