import {Link} from "react-router-dom";
import React from "react";

import Upper from "../../components/upper/upper";
import Footer from "../../components/footer/footer";
import secOneImg from "../../assets/images/secOneImg.svg";
import uploadPress from "../../assets/images/presPic.jpg";
import myOrdersPic from "../../assets/images/orderPic.jpg";
import NormalBtn from "../../components/buttons/normalBtn";
import "./CustomerHome.css";

export function CustomerHome() {
  return (

<div className="CustomerHome">
  <Upper />

  <div className="container">

    <div className="row row-content align-items-center">
        <div className="col-12 col-md order-sm-last col-lg">
            <div className="media">
              <div className="media-body">
                <div className="d-none d-lg-block" ><img src={secOneImg} alt="" className="d-flex mr-3 img-thumbnial align-self-center" /></div>
              </div>
            </div> 
        </div>
        <div className="col-sm-12 col-md order-md-first col-lg">
          <div className="card">
            <img className="card-img-top" src={uploadPress} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Prescription</h5>
              <p className="card-text">You can upload your prescription in here. You just need to press the below button UPLOAD PRESCRIPTION.</p>
              <Link to={`/Customer/presUpload`}><p className="btn btn-info">Upload Prescription</p></Link>
            </div>
          </div>
        </div>
    </div>

    <div className="row row-content align-items-center">
      <div className="col-sm-12 col-md order-sm-last col-lg">
        <div className="card">
          <img className="card-img-top" src={myOrdersPic} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Orders</h5>
            <p className="card-text">In here you can see your previous prescriptions. You just need to press the below button MY ORDERS.</p>
            <Link to={`/Customer/pendingList`}><p className="btn btn-info">My Orders</p></Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-md order-md-first col-lg-8">
          <div className="media">
              <div className="media-body">
                <div className="d-none d-lg-block" ><img src={secOneImg} alt="" className="d-flex mr-3 img-thumbnial align-self-center"  /></div>
              </div>
          </div>
      </div>
    </div>

  </div>

    <Footer />
</div>

  );
}



