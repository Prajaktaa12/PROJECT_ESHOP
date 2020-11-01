import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
class Payment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="row">
            <div className="col-md-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Billing Address"
              />
              <button className="btn btn-success btn-block" type="submit">
                Add Address
              </button>
            </div>
          </div>

          <form>
            <div className="form-group" align="center">
              <div className="row">
                <div className="col-xs-1-12">
                  <div className="col-lg-12">
                    <label>
                      NAME ON CARD :
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name On Card"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-xs-1-12">
                  <div className="col-lg-12">
                    <label>
                      CARD NUMBER :
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Card Number"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1-12">
                  <div className="col-lg-12">
                    <label>
                      CVV :
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-xs-1-12">
                  <div className="col-lg-12">
                    <label>
                      EXPIRY DATE :
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YYYY"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button className="btn btn-primary btn-block">
            TOTAL : {this.props.total}
          </button>
          <button className="btn btn-success btn-block">
            PAY <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </div>
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

export default connect(mapStateToProps)(Payment);
