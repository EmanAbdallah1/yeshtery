import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid mx-auto">
            <div className="d-flex align-items-center">
              <button className="navbar-brand" href="#">
                <img
                  src="./images/sidebaricon.svg"
                  alt="sidebaricon"
                  title="sidebaricon"
                />
              </button>
              <Link className="navbar-brand" to="/">
                <img src="./images/logoo.svg" alt="logo" title="logo" />
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu1"
              aria-controls="navbarMenu1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarMenu1">
              <p className="mb-0 shopNow">
                &lt; Valentine’s Day Offers! Buy Two Get One Free{" "}
                <span>
                  <b>
                    <a href="" className="text-decoration-underline">
                      Shop Now
                    </a>
                  </b>
                </span>
                &gt;
              </p>

              <div className="nav-conrols d-flex align-items-center ">
                <div className="d-flex mx-1">
                  <img src="./images/phone.svg" alt="phone" title="phone" />
                  <a className="mx-1 dark">Contact Us</a>
                </div>
                <div className="d-flex mx-1">
                  <img src="./images/shop.svg" alt="shop" title="shop" />
                  <a className="mx-1">Track Order</a>
                </div>
                <div className="d-flex mx-1">
                  <img
                    src="./images/location.svg"
                    alt="location"
                    title="location"
                  />
                  <a className="mx-1">Find A Store</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid mx-auto">
            <form className="form-inline my-2  d-flex position-relative">
              <input
                className="form-control mr-sm-2 searchinput"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="position-absolute"
                style={{ top: "11px", left: "13px" }}
              />
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu2"
              aria-controls="navbarMenu2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMenu2">
              <img src="./images/adidas.svg" alt="adidas" title="adidas" />

              <div className="nav-conrols d-flex align-items-center">
                <div className="d-flex mx-2 position-relative">
                  <img src="./images/cart.svg" alt="cart" title="cart" />
                  <a className="mx-1 dark" onClick={this.toggleSidebar}>
                    Cart
                  </a>
                  <span
                    className="cartItemNumbers"
                    onClick={this.toggleSidebar}
                  >
                    {this.props.cartItemsCount}
                  </span>
                </div>
                <div className="d-flex mx-2">
                  <img
                    src="./images/wish.svg"
                    alt="Wishlist"
                    title="Wishlist"
                  />
                  <a className="mx-1">Wishlist</a>
                </div>
                <div className="d-flex mx-2">
                  <img src="./images/login.svg" alt="login" title="login" />
                  <a className="mx-1">Login</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid mx-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse m-auto" id="navbarNavDropdown">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Unisex
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kids
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Best Sellers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#">
                    Offers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Sidebar
          isOpen={this.state.isOpen}
          toggleSidebar={this.toggleSidebar}
          items={this.props.items}
          onRemoveFromCart={this.props.onRemoveFromCart}
          cartItemsCount={this.props.cartItemsCount}
          quantityValue={this.props.quantityValue}
        />
      </>
    );
  }
}
