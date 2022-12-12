import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function DetailData() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/data").then((response1) => {
      setData(response1.data);
    });

    Axios.get("http://localhost:3000/status").then((response2) => {
      setStatus(response2.data);
    });
  }, []);

  return (
    <div className="container-gr-table">
      <h2 className="grid-title">Detail Data</h2>
      <div className="status-legends">
        <h4 className="status-title">Status</h4>
        {
          status.map((item) => {return(
              <div className="status-label">
                <h5>{item.id}</h5>
                <h5>{item.name}</h5>
              </div>
            )})
        }
      </div>
      <table className="grid-table">
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Customer Name</th>
          <th>Status</th>
          <th>Transaction Date</th>
        </tr>
        {data.map((item) => {
          return (
            <tr className="data-row">
              <td>{item.id}</td>
              <td>{item.productID}</td>
              <td>{item.productName}</td>
              <td>{item.amount}</td>
              <td>{item.customerName}</td>
              <td>{item.status}</td>
              <td>{item.transactionDate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
