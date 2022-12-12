import React, { Component } from "react";
import Eclipse1 from "./assets/Eclipse 1.png";
import Eclipse2 from "./assets/Eclipse 2.png";
import DataGrid from "./SelectedData.js";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="home-first-part">
          <div className="first-left">
            <img src={Eclipse1} alt="img" />
          </div>
          <div className="greetings">
            <h1 className="fn-big-bold">Welcome, <span className="fn-green">Solution Finder</span></h1>
            <h4 className="fn-gray">Secure | Reliable | Innovative</h4>
            <p>We are an information technology company which providing electronic transaction sevices. 
              We are here to help your business development through our services including
              development services for our business partners.</p>
          </div>
          <div className="first-right">
            <img src={Eclipse2} alt="img" />
          </div>
        </section>
        <section className="home-second-part">
          <DataGrid/>
        </section>
      </div>
    );
  }
}

export default HomePage;
