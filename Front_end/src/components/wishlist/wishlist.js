import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FetchProductById,
  RemoveProduct,
} from "../../store/actions/product/product";
import "./wishlist.css";
class Wishlist extends Component {
  constructor(props) {
    super(props);
  }

  AddCart = (id) => {
    this.props.FetchProductById(id);
    this.props.history.push("/Cart");
  };

  render() {
    if (this.props.loading) {
      return (
        <h1 style={{ textAlign: "center" }}>
          <i
            className="fa fa-spinner fa-spin fa-1x fa-fw"
            aria-hidden="true"
          ></i>
        </h1>
      );
    }

    if (this.props.wishlistitem.length > 0) {
      return (
        <React.Fragment>
          <div
            className="container"
            style={{ height: "400", width: "800", margin: "5px" }}
          >
            <div className="row">
              {this.props.wishlistitem.map((data) => (
                <div className="col-md-6" key={data._id}>
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
                          <div className="productprice">
                            <i className="fa fa-inr" aria-hidden="true"></i>
                            {data.price}
                          </div>
                        </span>
                      </h6>
                      <p>{data.description}</p>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.props.RemoveProduct(data._id)}
                      >
                        <i className="fa fa-trash-o"></i>
                      </button>
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
    } else {
      return (
        <h6 style={{ alignSelf: "center", margin: "200px" }}>
          <i className="fa fa-shopping-bag fa-5x fa-fw" aria-hidden="true"></i>
          YOUR BAG IS EMPTY
        </h6>
      );
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.wishlist.loading,
    wishlistitem: state.wishlist.wishlistitem,
  };
};

export default connect(mapStateToProps, { FetchProductById, RemoveProduct })(
  Wishlist
);
