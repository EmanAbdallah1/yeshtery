import React, { Component } from "react";
import Nav from "./Components/Nav";

import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Unisex from "./Pages/Unisex";
import Kids from "./Pages/Kids";
import BestSellers from "./Pages/BestSellers";
import NewArrivals from "./Pages/NewArrivals";
import Offers from "./Pages/Offers";


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      value:1,
      cartValue:0,
      productInfo: {
        id:1,
        name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        cat: "Men",
        price: 9.999,
        priceBefore: 9.999,
        discount: 50,
        prand: "asidas",
        productPhoto: "similar1",
        rate: "4.2 of 5",
        rateNum: "22 Rates",
        factory: "Genena Mall",
        imgsrc:"./images/shirt.jpg"
      },
      size: {
        Small: "Small",
        Medium: "Medium",
        Large: "Large",
        xLarge: "X Large",
        xxLarge: "XX Large",
      },
    };
  }
  handleAddToCart = (item) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item]
    }));
    console.log(item)
  };
 

  handleRemoveFromCart = (item) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((cartItem) => cartItem.id !== item.id)
    }));
  };
 

  render() {
    const { cartItems } = this.state;
 
    return (
      <div>
         <Router>
        <Nav items={cartItems}
          onRemoveFromCart={this.handleRemoveFromCart}
          value={this.state.value}
          cartItemsCount={cartItems.length}
          quantityValue={this.state.value}
          />
                <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-decoration-underline">
              <a href="#">Men</a>
            </li>
            <li className="breadcrumb-item text-decoration-underline">
              <a href="#">Clothing</a>
            </li>
            <li className="breadcrumb-item text-decoration-underline">Tops</li>
            <li className="breadcrumb-item text-decoration-underline">
              <a href="#">Adidas</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#" aria-current="page">
                Adidas Black T-Shirt
              </a>
            </li>
          </ol>
        </nav>
           <Routes>
            <Route exact path="/" element={<Men    id={this.state.productInfo.id}
        name={this.state.productInfo.name}
        cat={this.state.productInfo.cat}
        price={this.state.productInfo.price}
        priceBefore={this.state.productInfo.priceBefore}
        discount={this.state.productInfo.discount}
        prand={this.state.productInfo.prand}
        productPhoto={this.state.productInfo.productPhoto}
        rate={this.state.productInfo.rate}
        rateNum={this.state.productInfo.rateNum}
        factory={this.state.productInfo.factory}
        Small={this.state.size.Small}
        Medium={this.state.size.Medium}
        Large={this.state.size.Large}
        xLarge={this.state.size.xLarge}
        xxLarge={this.state.size.xxLarge}
        onAddToCart={this.handleAddToCart}
        handleAddItemToCart={this.handleAddItemToCart}
        value={this.state.value}
      
        cartItems={cartItems}
        imgsrc={this.state.productInfo.imgsrc}
      
        />} />
            <Route path="/Women" element={<Women/>} />
            <Route path="/Unisex" element={<Unisex/>} />
            <Route path="/Kids" element={<Kids/>} />
            <Route path="/BestSellers" element={<BestSellers/>} />
            <Route path="/NewArrivals" element={<NewArrivals/>} />
            <Route path="/Offers" element={<Offers/>} />
          </Routes>
          </Router>
  
    
        <Footer />
      </div>
    );
  }
}
