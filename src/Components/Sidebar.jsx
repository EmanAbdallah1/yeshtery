import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleRemoveFromCart = (item) => {
    const { onRemoveFromCart } = this.props;
    onRemoveFromCart(item);
  };

  render() {
    const { items } = this.props;
    console.log(items);

    return (
      <>
        <div className="container-fluid">
          <div className={`sidebar ${this.props.isOpen ? "active" : ""}`}>
            <div className="sd-header">
              <div
                className="btn btn-default"
                onClick={this.props.toggleSidebar}
                style={{ fontSize: " 24px" }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <div>
              <h2 className="text-purple fw-bold text-center myCart">
                My Cart
              </h2>
            </div>
            <div className="sd-body">
              <span className="fw-bold ">Cart Summary</span>
              <ul className="mt-4 ">
                {items &&
                  items.map((item, index) => (
                    <li key={index}>
                      <div className="cart-items d-flex">
                        <img src={item.imgsrc} alt="shirt" title="shirt" />
                        <div className="cart-item mx-3">
                          <span className="fw-bold productname">
                            {item.name}
                          </span>
                          <div className="d-flex">
                            Quantity: <span>{item.value}</span>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-purple fw-bold">
                              {item.value * item.price} <sub>LE</sub>
                            </span>
                            <button
                              onClick={() => this.handleRemoveFromCart(item)}
                              className="remove"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                {this.props.cartItemsCount ? (
                  <li className="finalstep">
                    <span className="fw-bold text-center m-auto d-block total mt-3 mb-3">
                      Total: 99.99 LE
                    </span>{" "}
                    <div className="d-flex justify-content-center">
                      <button className="reviewCart mx-3 fw-bold">
                        Review Cart
                      </button>
                      <button className="checkout fw-bold">
                        Complete Checkout
                      </button>
                    </div>
                  </li>
                ) : (
                  "there is no items in your cart"
                )}
              </ul>
              {/* <ul>
                <li>
                  <a className="sd-link">Menu Item 1</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 2</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 3</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 4</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 5</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 6</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 7</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 8</a>
                </li>
              </ul> */}
            </div>
          </div>
          <div
            className={`sidebar-overlay ${this.props.isOpen ? "active" : ""}`}
            onClick={this.props.toggleSidebar}
          ></div>
        </div>
      </>
    );
  }
}
