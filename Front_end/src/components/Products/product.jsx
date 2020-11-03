import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FetchProduct,
  FetchProductById,
  GetProduct,
} from "../../store/actions/product/product";
import { Link } from "react-router-dom";
import Rating from "../Rating/rating";
import "./product.css";

class Shop extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.FetchProduct();
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
    if (this.props.loading) {
      return (
        <h1 style={{ textAlign: "center" }}>
          <i
            className="fa fa-spinner fa-pulse fa-1x fa-fw"
            aria-hidden="true"
          ></i>
        </h1>
      );
    }
    if (!this.props.products) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="pro-con">
          <div className="row product-row">
            {this.props.products.map((data) => (
              <div className="col-md-3" key={data._id}>
                <div className="card product-card">
                  <img
                    className="card-img-top img"
                    src={data.image}
                    alt={data.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title border-bottom pb-3">
                      {data.name}
                      <span
                        className="float-right badge badge-light"
                        inline="true"
                        style={{ padding: "05px" }}
                      >
                        {/* {
                        this.props.offeritem ? 
                        <div className="product"><i className="fa fa-inr" aria-hidden="true"></i>
                        {data.offerprice}</div>
                        :
                        null
                         
                      }  */}
                        <div className="productprice">
                          <i className="fa fa-inr" aria-hidden="true"></i>
                          {data.price}
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
                    {this.props.user ? (
                      <button className="btn btn-sm">
                        <Link as={Link} to={`/updateproduct/${data._id}`}>
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                      </button>
                    ) : null}
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
    products: state.product.data,
    loading: state.product.loading,
    offeritem: state.offer.offeritem,
    user: state.login.data,
  };
};

export default connect(mapStateToProps, {
  FetchProduct,
  FetchProductById,
  GetProduct,
})(Shop);
