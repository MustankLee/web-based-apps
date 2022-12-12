import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function SelectedData() {
  const [select, setSelect] = useState([]);
  // const [date, setDate] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/data")
      .then((response) => {
        const test = response.data.map((item) => {
          const parts = item.transactionDate.split("-");
          return parts[0] + "-" + parts[1];
        });

        // const yearMonth = response.data.map(item => {
        //   const parts = item.split("-");
        //   return (parts[0] + "-" + parts[1]);
        // })
        // setDate(test);

        const dataRes = response.data.reduce((cek, { transactionDate, id }) => {
          (cek[transactionDate] = cek[transactionDate] || []).push(id);
          return cek;
        }, {});

        // console.log(test);
        // console.log(dataRes);

        setSelect(response.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <div className="container-gr-table">
      <h2 className="grid-title">Transaction</h2>
      <table className="grid-table">
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Product ID</th>
          <th>Transaction Date</th>
        </tr>
        {select.map((item) => {
          return (
            <tr className="data-row">
              <td>{item.id}</td>
              <td>{item.customerName}</td>
              <td>{item.productID}</td>
              <td>{item.transactionDate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
