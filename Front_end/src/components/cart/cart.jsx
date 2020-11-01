import React, { Component } from "react";
import { connect } from "react-redux";
import {
  RemoveProductById,
  AddQuantity,
  RemoveQuantity,
} from "../../store/actions/product/product";
import { Link } from "react-router-dom";
class Cart extends Component {
  constructor(props) {
    super(props);
  }
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

    if (this.props.items.length > 0) {
      return (
        <React.Fragment>
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Product</th>
                <th style={{ width: "10%" }}>Price</th>
                <th style={{ width: "8%" }}>Quantity</th>
                <th style={{ width: "20%" }} className="text-center">
                  Subtotal
                </th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((data) => (
                <tr key={data._id}>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-4 hidden-xs">
                        <img
                          src={data.image}
                          alt={data.name}
                          style={{ height: "100px", width: "100px" }}
                        />
                      </div>
                      <div className="col-sm-8">
                        <h4>{data.name}</h4>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">
                    <i className="fa fa-inr" aria-hidden="true"></i>
                    {data.price}
                  </td>
                  <td data-th="Quantity">
                    <span
                      className="badge badge-light"
                      style={{ margin: "0px 10px " }}
                    >
                      <button className="btn btn-light btn-sm" type="submit">
                        <i
                          className="fa fa-minus-square-o fa-1x fa-fw"
                          aria-hidden="true"
                          onClick={() => this.props.RemoveQuantity(data)}
                        ></i>
                      </button>
                      <button className="btn btn-sm">{data.quantity}</button>
                      <button className="btn btn-light btn-sm" type="submit">
                        <i
                          className="fa fa-plus-square-o fa-1x fa-fw"
                          aria-hidden="true"
                          onClick={() => this.props.AddQuantity(data)}
                        ></i>
                      </button>
                    </span>
                  </td>
                  <td data-th="Subtotal" className="text-center">
                    <i className="fa fa-inr" aria-hidden="true"></i>
                    {data.price * data.quantity}
                  </td>

                  <td className="actions" data-th="">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.props.RemoveProductById(data._id)}
                    >
                      <i className="fa fa-trash-o"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <a
                    onClick={() => this.props.history.push("/Shop")}
                    className="btn btn-warning"
                  >
                    <i className="fa fa-angle-left"></i> Continue Shopping
                  </a>
                </td>
                <td colSpan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center">
                  <strong>
                    Total <i className="fa fa-inr" aria-hidden="true"></i>
                    {this.props.total}
                  </strong>
                </td>
                <td>
                  <Link to="/checkout" className="btn btn-success btn-block">
                    Checkout <i className="fa fa-angle-right"></i>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </React.Fragment>
      );
    } else {
      return (
        <h6 style={{ alignSelf: "center", margin: "200px" }}>
          <i className="fa fa-shopping-cart fa-5x fa-fw" aria-hidden="true"></i>
          YOUR CART IS EMPTY
        </h6>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.cart.loading,
    items: state.cart.items,
    offer: state.offer.offeritem,
    total: state.cart.items.reduce(
      (accumlator, nextvalue) =>
        accumlator + nextvalue.price * nextvalue.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps, {
  RemoveProductById,
  AddQuantity,
  RemoveQuantity,
})(Cart);
