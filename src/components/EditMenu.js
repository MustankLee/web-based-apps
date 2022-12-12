import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function EditMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/data").then((response1) => {
      setData(response1.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const posDel = (id, e) => {
    e.preventDefault();
    Axios.delete(`http://localhost:3000/data/${id}`)
      .then((response) => {
        console.log("Data Has Been Deleted, Please Check in the \"Detail Data\"")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <div className="title-menu">
        <h2>Edit Data</h2>
      </div>
      <div className="edit-table">
        <table className="grid-table">
          <tr>
            <th>ID</th>
            <th>Product ID</th>
            <th>Amount</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Action</th>
          </tr>
          {data.map((item) => {
            return (
              <tr className="edit-row">
                <td>{item.id}</td>
                <td>{item.productID}</td>
                <td>{item.amount}</td>
                <td>{item.customerName}</td>
                <td>{item.status}</td>
                <td>{item.transactionDate}</td>
                <td><button className="btn-reg" onClick={(e) => posDel(item.id, e)}>Delete</button></td>
              </tr>
            );
          })}
        </table>
        <div>
          <i>*TBA: Check the data on menu "Detail Data" or refresh the page after delete the data to see the result</i>
        </div>
      </div>
    </div>
  );
}
