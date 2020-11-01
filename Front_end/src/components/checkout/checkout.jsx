import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
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
                    {data.quantity}
                  </span>
                </td>
                <td data-th="Subtotal" className="text-center">
                  <i className="fa fa-inr" aria-hidden="true"></i>
                  {data.price * data.quantity}
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
                  <i className="fa fa-angle-left"></i> Shop More
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
                <Link to="/payment" className="btn btn-success btn-block">
                  Proceed
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.cart.items,
    total: state.cart.items.reduce(
      (accumlator, nextvalue) =>
        accumlator + nextvalue.price * nextvalue.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps)(Checkout);
