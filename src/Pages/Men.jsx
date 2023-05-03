import React, { Component } from "react";
import ProductInfo from "../Components/ProductInfo";
import ProductGallay from "../Components/ProductGallay";
import SimilarProduct from "../Components/SimilarProduct";
export default class Men extends Component {
  render() {
    return (
      <>
        <div className="contaainer d-flex">
          <ProductGallay />
          <ProductInfo
            id={this.props.id}
            name={this.props.name}
            cat={this.props.cat}
            price={this.props.price}
            priceBefore={this.props.priceBefore}
            discount={this.props.discount}
            prand={this.props.prand}
            productPhoto={this.props.productPhoto}
            rate={this.props.rate}
            rateNum={this.props.rateNum}
            factory={this.props.factory}
            Small={this.props.Small}
            Medium={this.props.Medium}
            Large={this.props.Large}
            xLarge={this.props.xLarge}
            xxLarge={this.props.xxLarge}
            onAddToCart={this.props.onAddToCart}
            quantityValue={this.props.value}
            increment={this.props.increment}
            decrement={this.props.decrement}
            cartItems={this.props.cartItems}
            handleAddItemToCart={this.props.handleAddItemToCart}
            imgsrc={this.props.imgsrc}
          />
        </div>
        <div className="contaainer">
          <SimilarProduct />
        </div>
      </>
    );
  }
}
