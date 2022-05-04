import SubHeader from "../../components/subHeader/subHeader";
import React, { useState,useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getStatus, changeState, getUser } from "../../firebase/firebase";
import * as ReactBootStrap from 'react-bootstrap';
import "./MyOrderView.css";


function getDate(time){
  
  const fireBaseTime = new Date(
    time.seconds * 1000 + time.nanoseconds / 1000000,
  );
  const date = fireBaseTime.toDateString();
  const atTime = fireBaseTime.toLocaleTimeString();
  return{
    'date': date,
    'time': atTime
  }

}

export function MyOrderView() {
  const user = getUser();
  const params = useParams();
  const Id = user.userId;
  var docId = params.ID;
  const loc = useLocation();
  const orderData = loc.state.orderD;
  const [render,setRender] = useState(false);
  const [status,setStatus] = useState(orderData.status);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const createdAt = getDate(orderData.createdAt);
  const date = createdAt.date;
  const time = createdAt.time;

  useEffect(() => {
    getStatus(Id, docId, setStatus);
  }, [render]);

  const beingVerifiedMsg = () => {
    if (status === "Processing") {
      return (
        <p style={{ color: "#a57c00", fontWeight: "bold" }}>
          Thank you for believing in e-pharmacy service! Your medicine order is
          being verified.
        </p>
      );
    } else if (status === "Delivered" || status === "Received") {
      return (
        <p style={{ color: "#037E00", fontWeight: "bold" }}>
          Your medicines have been delivered. Thank you for believing in
          e-pharmacy service.
        </p>
      );
    } else if (status === "Verified") {
      return (
        <p style={{ color: "#037E00", fontWeight: "bold" }}>
          Thank you for believing in e-pharmacy service! Your medicine order is
          verified.
        </p>
      );
    } else if (status === "Declined") {
      return (
        <p style={{ color: "#B42708", fontWeight: "bold" }}>
          Unfortunately your prescription drugs are unavailable at the moment.
        </p>
      );
    }
  };
  const deliveryMsg = () => {
    if (status === "Verified") {
      return (
        <p>
          Order is placed and it will be<br></br>
          delivered within two days. Contact Us <br></br>
          for any change in the order:<br></br>
          011-029 2092
        </p>
      );
    } else {
    }
  };

  const changeStatus = (e) => {
    e.preventDefault();
    changeState(Id, docId, "Received");
    setLoading(true);
    setDisable(true);
    setRender(true);
  };

  useEffect(() => {
    setLoading(false);
    if (
      status === "Received" ||
      status === "Declined" ||
      status === "Verified" ||
      status === "Processing"
    ) {
      setDisable(true);
    }else{
      setDisable(false);
    }
  }, [status]);

  return (
    <>
      <SubHeader />
      <div className="viewOrder">
        <div>
          <h3>Order Details</h3>
        </div>
        <div className="order__container">
          <div className="row">
            <div className="col-6">
              <h4>
                <strong>Order ID: </strong>
                {docId}
              </h4>
              <p>
                <strong>Order Title: </strong>
                {orderData.title}
              </p>
              <p>
              <strong>Order Date: </strong>
                {date}
              </p>
              <p>
              <strong>at : </strong>
                {time}
              </p>
              <p>
                <strong>Address: </strong>
                {orderData.address}
              </p>
                {loading ? (
                  <div className="text-center m-2">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">
                        <ReactBootStrap.Spinner animation="border" />
                      </span>
                    </div>
                    <div className="spinner-grow" role="status">
                      <span className="sr-only">
                        <ReactBootStrap.Spinner animation="grow" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <p>
                  <strong>Status: </strong>
                  {status}
                  </p>
                )}
              <p>
                <strong>Total amount : </strong>
                LKR {orderData.price}
              </p>
            </div>
            <div className="col-6 img__container">
              <img src={orderData.prescription} alt="" />
            </div>
            <div className="col-6 delivery__msg">{deliveryMsg()}</div>
          </div>
        </div>
        <br></br>
        {beingVerifiedMsg()}
        <div className="receive__btn">
          <button
            onClick={changeStatus}
            style={{ display: disable ? "none" : "block" }}
          >
            Received
          </button>
        </div>
      </div>
    </>
  );
}
