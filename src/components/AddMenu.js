import React, { useState } from "react";
import DataList from "./DetailData.js";
import axios from "axios";

export default function AddMenu() {
  const [datas, setDatas] = useState([DataList]);
  const [cond, setCond] = useState(false);

  const [postForm, setPostForm] = useState({
    id: "",
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: "",
    transactionDate: "",
  });

  function changeHandle(e) {
    let temp1 = { ...postForm };
    temp1[e.target.name] = e.target.value;
    setPostForm(temp1);
  }

  //ADDITIONAL UPDATE FEATURE
  // function checkForUpdate() {
  //   let tempData = [...datas];

  //   tempData.forEach((item) => {
  //     if (item.id === postForm.id) {
  //       item.productName = postForm.productName;
  //       item.amount = postForm.amount;
  //       item.customerName = postForm.customerName;
  //       item.status = postForm.status;
  //       item.transactionDate = postForm.transactionDate;
  //       setCond(true);
  //       console.log("updated")
  //     } else {
  //       setCond(false);
  //     }
  //   });

  //   if (cond === true) {
  //     let find = tempData.find((item) => item.id === id);
  //     setPostForm({
  //       productID: find.productID,
  //       productName: find.productName,
  //       amount: find.amount,
  //       customerName: find.customerName,
  //       status: find.status,
  //       transactionDate: find.transactionDate,
  //     });
  //   }
  // }

  function submitHandle(e) {
    e.preventDefault();

    //ADDITIONAL UPDATE FEATURE
    // checkForUpdate();

    if (
      postForm.id === "" ||
      postForm.productID === "" ||
      postForm.productName === "" ||
      postForm.amount === "" ||
      postForm.customerName === "" ||
      postForm.status === "" ||
      postForm.transactionDate === ""
    ) {
      alert("Please fill the data correctly");
      return false;
    }

    let temp2 = [...datas];

    if (cond === false) {
      let temp = {
        id: postForm.id,
        productID: postForm.productID,
        productName: postForm.productName,
        amount: postForm.amount,
        customerName: postForm.customerName,
        status: postForm.status,
        transactionDate: postForm.transactionDate,
      };
      temp2.push(temp);

      axios
        .post("http://localhost:3000/data", temp)
        .then((response) => {
          console.log("Data Saved to json server");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    //data saved on here
    setDatas(temp2);
    setPostForm({
      id: "",
      productID: "",
      productName: "",
      amount: "",
      customerName: "",
      status: "",
      transactionDate: "",
    });
  }

  return (
    <div>
      <div className="title-menu">
        <h2>Add Data</h2>
      </div>
      <form className="fm-style" onSubmit={submitHandle}>
        <div className="label-fm">
          <div className="fm-left">
            <label>ID</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.id}
              type="number"
              name="id"
              placeholder="Input your id"
            ></input>
          </div>
        </div>
        <div className="label-fm">
          <div className="fm-left">
            <label>Product ID</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.productID}
              type="text"
              name="productID"
              placeholder="Input your product id"
            ></input>
          </div>
        </div>
        <div className="label-fm">
          <div className="fm-left">
            <label>Product Name</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.productName}
              type="text"
              name="productName"
              placeholder="Input your product name"
            ></input>
          </div>
        </div>
        <div className="label-fm">
          <div className="fm-left">
            <label>Amount</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.amount}
              type="number"
              name="amount"
              placeholder="Input the amount"
            ></input>
          </div>
        </div>
        <div className="label-fm">
          <div className="fm-left">
            <label>Customer Name</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.customerName}
              type="text"
              name="customerName"
              placeholder="Input the customer name"
            ></input>
          </div>
        </div>
        <div className="label-fm">
          <div className="fm-left">
            {" "}
            <label>Status</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.status}
              type="number"
              name="status"
              placeholder="Input the status (0, Success) (1,Failed)"
            ></input>
          </div>
        </div>
        <div className="label-fm">
          <div className="fm-left">
            <label>Transaction Date</label>
          </div>
          <div className="fm-right">
            <input
              onChange={changeHandle}
              value={postForm.transactionDate}
              type="date"
              name="transactionDate"
            ></input>
          </div>
        </div>
        <button className="btn-active">Submit</button>
        <div>
          <i>*TBA: Check the data on menu "Detail Data" after add the data</i>
        </div>
      </form>
    </div>
  );
}
