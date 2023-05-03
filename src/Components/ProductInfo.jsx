import React, { Component } from "react";

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
  }

  handleAddToCart = () => {
    const { id, name, price, onAddToCart, imgsrc } = this.props;
    const itemIndex = this.props.cartItems.findIndex((item) => item.id == id);
    console.log("id", id);
    console.log("itemIndex", itemIndex);
    if (itemIndex === -1) {
      onAddToCart({ id, name, price, imgsrc, value: 1 });

      console.log("product added");
    } else {
      let updatedItems = this.props.cartItems.map((item) =>
        item.id === id ? { ...item, value: ++item.value } : item
      );
      this.setState({ cartItems: updatedItems });

      console.log("product increased");
      console.log(this.props.cartItems);
    }
  };

  render() {
    const {
      id,
      name,
      price,
      cat,
      rate,
      rateNum,
      priceBefore,
      discount,
      Small,
      Medium,
      Large,
      xLarge,
      xxLarge,
    } = this.props;
    return (
      <div className="productinfo">
        <img src="./images/adidas.svg" alt="logo" title="logo" />
        <p className="mt-3 fw-bold">{name}</p>
        <span className="mt-3 fw-bold text-gray">{cat}</span>
        <div className="rating d-flex align-items-center justify-content-between">
          <p className="d-flex align-items-center mb-2 mt-2">
            <i className="star checked"></i>
            <i className="star checked"></i>
            <i className="star checked"></i>
            <i className="star checked"></i>
            <i className="star"></i>
          </p>
          <p className="fw-bold mb-0">{rate}</p>
          <span className="fw-bold text-gray">{rateNum}</span>
        </div>
        <div className="pricing d-flex align-items-center justify-content-between">
          <span className="text-purple fw-bold">
            {price} <sub>LE</sub>
          </span>
          <span className="text-decoration-line-through text-gray fw-bold">
            {priceBefore}LE
          </span>
          <span className="discount fw-bold">{discount}% Off</span>
        </div>
        <hr />
        <h4 className="fw-bold">Size</h4>
        <form className="mt-3">
          <input type="radio" id="Small" name="size" value={Small} />
          <label htmlFor="Small">{Small}</label>

          <input type="radio" id="Medium" name="size" value={Medium} />
          <label htmlFor="Medium">{Medium}</label>

          <input
            type="radio"
            id="Large"
            name="size"
            value={Large}
            defaultChecked
          />
          <label htmlFor="Large">{Large}</label>

          <input type="radio" id="X Large" name="size" value={xLarge} />
          <label htmlFor="X Large">{xLarge}</label>

          <input type="radio" id="XX Large" name="size" value={xxLarge} />
          <label htmlFor="XX Large">{xxLarge}</label>
        </form>
        <hr />
        <h4 className="fw-bold">Color</h4>
        <form className="colorshirt d-flex flex-row-reverse justify-content-end mt-3">
          <input type="radio" id="black" name="color" value="" />
          <label htmlFor="black"></label>
          <input type="radio" id="red" name="color" value="" defaultChecked />
          <label htmlFor="red"></label>
        </form>

        <hr />
        <h4 className="fw-bold">Quantity</h4>
        <div className="quantity-input mt-3">
          <button className="quantity-input__modifier quantity-input__modifier--left">
            &mdash;
          </button>
          <input
            className="quantity-input__screen"
            type="text"
            onChange={this.handleQuantityChange}
            value={this.props.quantityValue}
            readOnly
          />
          <button className="quantity-input__modifier quantity-input__modifier--right">
            &#xff0b;
          </button>
        </div>
        <div className="order-controls mt-3">
          <button className="addcart" onClick={() => this.handleAddToCart(id)}>
            Add To Cart
          </button>
          <button className="pickup">Pickup From Store</button>
        </div>
      </div>
    );
  }
}
