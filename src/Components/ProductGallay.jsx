import React, { Component, lazy, Suspense } from "react";
import shirt from "../images/shirt.jpg";
import shirt1 from "../images/1.png";
import shirt2 from "../images/2.png";
import shirt3 from "../images/3.png";
import shirt4 from "../images/4.png";

const Slider = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("react-slick")), 2000);
  });
});

const photos = [shirt, shirt1, shirt2, shirt3, shirt4];

export default class ProductGallay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="productimages">
        <Suspense
          fallback={
            <div className="loader">
              <i className="loader-el"></i>
              <i className="loader-el"></i>
            </div>
          }
        >
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            arrows={false}
          >
            {photos.map((i) => {
              return (
                <div key={i}>
                  <img
                    src={i}
                    alt="productphoto"
                    title="productphoto"
                    className="mainphoto"
                  />
                </div>
              );
            })}
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={true}
          >
            {photos.map((i) => {
              return (
                <div key={i}>
                  <img
                    src={i}
                    alt="productphoto"
                    title="productphoto"
                    className="smallphoto"
                  />
                </div>
              );
            })}
          </Slider>
        </Suspense>
      </div>
    );
  }
}
