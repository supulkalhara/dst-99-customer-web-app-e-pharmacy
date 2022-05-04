import "./ordersList.css";
import "./table.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderBtn from "../../components/buttons/headerBtn";

export function OrdersList({ customers }) {
  return (
    <div>
      <div className="orders__container">
        <div className="wrap__table">
          <table className="fl-table">
            <tbody>
              <tr className="table__header">
                <td>Title</td>
                <td>Status</td>
                <td>View</td>
              </tr>
            </tbody>

            {customers.map((customer) => {
              const id = customers.indexOf(customer) + 1;
              return (
                <tbody key={id}>
                  <tr className="table__data">
                    <td>{customer.title}</td>

                    <td>{customer.status}</td>

                    <td>
                      <Link to={`orderView/${id}`} state={{ orderD: customer }}>
                        <HeaderBtn key={id} name="View" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

//check comment
