import React, { Component } from "react";
import { dummyData } from "../Services/proudtInfo.js";

export default class SimilarProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <>
        <h4 className="text-purple fw-bold">Similar Products</h4>
        <p className="text-gray">You may like these products also</p>
        <div className="d-flex similar">
          {dummyData.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={item.productPhoto}
                      alt="similar"
                      title="similar"
                    />
                    <p className="mt-3 fw-bold">{item.name}</p>
                    <span className="text-purple fw-bold">
                      {item.price} <sub>LE</sub>
                    </span>
                    <div className="similardata d-flex align-items-center justify-content-between">
                      <span className="text-decoration-line-through text-gray fw-bold">
                        {item.priceBefore} LE
                      </span>
                      <span className="discount fw-bold">
                        {item.discount}%{" "}
                      </span>
                      <img src={item.prand} alt="asidas" title="asidas" />
                    </div>
                    <div className="rating2 d-flex align-items-center justify-content-center mb-3 mt-3 ">
                      <p className="d-flex align-items-center mb-0 mx-2">
                        <i className="star checked"></i>
                        <i className="star checked"></i>
                        <i className="star checked"></i>
                        <i className="star"></i>
                        <i className="star"></i>
                      </p>
                      <p className="fw-bold mb-0">{item.rate}</p>
                    </div>
                    <div className="pickupFrom d-flex align-items-center justify-content-center">
                      <p className="mb-0">Pickup From:</p>
                      <span className="fw-bold">{item.factory}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
