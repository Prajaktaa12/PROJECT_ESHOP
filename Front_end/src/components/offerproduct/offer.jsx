import React, { Component } from "react";
import { connect } from "react-redux";
import Rating from "../Rating/rating";
import {
  OfferProduct,
  FetchProductById,
  GetProduct,
} from "../../store/actions/product/product";
import "./offer.css";

class Offer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.OfferProduct();
  }

  AddCart = (id) => {
    this.props.FetchProductById(id);
    this.props.history.push("/Cart");
  };

  AddWishlist = (id) => {
    this.props.GetProduct(id);
    this.props.history.push("/wishlist");
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          style={{ height: "400", width: "800", margin: "5px" }}
        >
          <div className="row">
            {this.props.offeritem.map((data) => (
              <div className="col-md-3" key={data._id}>
                <div
                  className="card"
                  style={{ height: "400", width: "800", margin: "5px" }}
                >
                  <img
                    className="img"
                    src={data.image}
                    alt={data.name}
                    style={{ height: "180px", width: "160px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title border-bottom pb-3">
                      {data.name}
                      <span
                        className="float-right badge badge-light"
                        inline="true"
                        style={{ padding: "05px" }}
                      >
                        <div className="price">
                          <i className="fa fa-inr" aria-hidden="true"></i>
                          {data.price}
                        </div>
                        <div className="offer">
                          <i className="fa fa-inr" aria-hidden="true"></i>
                          {data.offerprice}
                        </div>
                      </span>
                    </h6>
                    <p>{data.description}</p>
                    <span>
                      <i
                        className="float-right fa fa-heart"
                        aria-hidden="true"
                        onClick={() => this.AddWishlist(data._id)}
                      ></i>
                    </span>
                    <Rating />
                    <button
                      className=" float-right btn btn-primary btn-sm"
                      type="submit"
                      onClick={() => this.AddCart(data._id)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.offer.loading,
    offeritem: state.offer.offeritem,
  };
};

export default connect(mapStateToProps, {
  OfferProduct,
  FetchProductById,
  GetProduct,
})(Offer);
