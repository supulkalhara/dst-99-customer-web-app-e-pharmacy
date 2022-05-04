import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { HomeView } from "../views/home/HomeView";
import { CustomerHome } from "../views/customer-home/CustomerHome";
import { MyOrderView } from "../views/myOrder/MyOrderView";
import { Login } from "../views/login/Login";
import { SignUp } from "../views/signUp/SignUp";
import { Error } from "../views/error/Error";
import { PrescUpload } from "../views/prescUpload/PrescUpload";
import { PendingOrders } from "../views/pendingOrders/pendingOrdersList";
import ProtectedRoutes from "./ProtRoutes";
import { getUser } from "../firebase/firebase";


export function Router() {
  const user = getUser();
  if(user.loggedIn){

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerHome />} />
  
          <Route element={<ProtectedRoutes/>}>
  
            <Route path="/Customer">
              <Route index element={<CustomerHome />} />
              <Route path=":customerID" element={<CustomerHome />} />
              <Route path="presUpload" element={<PrescUpload/>} />
              <Route path="pendingList" element={<PendingOrders/>} />
              <Route path="pendingList/orderView/:ID" element={<MyOrderView />} />
            </Route>
  
          </Route>
  
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route index element={<CustomerHome/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    );

  }else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
  
          <Route element={<ProtectedRoutes/>}>
  
            <Route path="/Customer">
              <Route index element={<CustomerHome />} />
              <Route path=":customerID" element={<CustomerHome />} />
              <Route path="presUpload" element={<PrescUpload/>} />
              <Route path="pendingList" element={<PendingOrders/>} />
              <Route path="pendingList/orderView/:ID" element={<MyOrderView />} />
            </Route>
  
          </Route>
  
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route index element={<HomeView/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

}
