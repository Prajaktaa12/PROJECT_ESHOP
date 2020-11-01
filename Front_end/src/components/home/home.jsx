import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="grid-item">
            <Carousel className="Carousel">
              <Carousel.Item>
                <a href="http://localhost:3000/Shop">
                  <img
                    className="d-block w-100 home-img"
                    src="http://localhost:4600/uploads/4.jpg"
                    alt="Third slide"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://localhost:3000/Shop">
                  <img
                    className="d-block w-100 home-img"
                    src="http://localhost:4600/uploads/banner-3.jpg"
                    alt="Third slide"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://localhost:3000/Shop">
                  <img
                    className="d-block w-100 home-img"
                    src="http://localhost:4600/uploads/laptops.jpg"
                    alt="Third slide"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://localhost:3000/Shop">
                  <img
                    className="d-block w-100 home-img"
                    src="http://localhost:4600/uploads/offmob.png"
                    alt="Third slide"
                  />
                </a>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
