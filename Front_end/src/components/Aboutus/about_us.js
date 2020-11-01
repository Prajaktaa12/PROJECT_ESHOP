import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./about_us.css";
class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo">
          <div class="grid-item">
            <h6>
              <strong>You can connect us on</strong>
            </h6>
            <div className="row">
              <div className="col-md-3">
                <a href="https://www.facebook.com/">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://twitter.com/">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://www.google.com/">
                  {" "}
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://in.linkedin.com/">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <Carousel style={{ height: "350px", width: "550px" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://localhost:4600/uploads/Customer.png"
                  style={{ height: "350px", width: "550px" }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://localhost:4600/uploads/delivery.png"
                  style={{ height: "350px", width: "550px" }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
