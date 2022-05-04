import React, { useContext, useEffect, useState } from "react";
import { collection, query, onSnapshot, getDocs } from "firebase/firestore";
import SubHeader from "../../components/subHeader/subHeader";
import { db, getUser, getAllorders } from "../../firebase/firebase";
import { OrdersList } from "./ordersList";
import "./pendingOrdersList.css";

export function PendingOrders() {
  const user = getUser();
  const Id = user.userId;
  const [customers, setCustomers] = useState([]);
  
  //const customers = [];

  useEffect(() => {
    getAllorders(Id, setCustomers);
  }, []);


  return (
    <>
      <SubHeader />
      <div className="viewOrder">
        <div className="">
          <h3>My Orders</h3>
        </div>

        <div className="orders__container">
          <OrdersList customers={customers} />
        </div>
      </div>
    </>
  );
}
