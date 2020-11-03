import React, { Component } from "react";
import "./search.css";
import { Navbar, Nav } from "react-bootstrap";
import SearchProduct from "../../store/actions/search/search";
import { FetchProductById } from "../../store/actions/product/product";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Rating from "../Rating/rating";
class Search extends Component {
  constructor(props) {
    super(props);
  }

  AddCart = (id) => {
    this.props.FetchProductById(id);
    this.props.history.push("/Cart");
  };

  handleForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Navbar className="navbar expand-lg bg-dark fixed-top">
        <h3 className="h3">
          <i className="fa fa-shopping-bag" aria-hidden="true">
            E-SHOP
          </i>
        </h3>
        <div className="search-row">
          <div className="col-lg-12">
            <form onSubmit={this.handleForm}>
              <div className="form-group search">
                <input
                  type="text"
                  placeholder="search here"
                  className="search-input"
                  onClick={() => this.props.history.push("/Search/:name")}
                />
                <button className="button">
                  <i
                    className="fa fa-search fa-1x fa-fw"
                    aria-hidden="true"
                  ></i>
                </button>
                <div></div>
              </div>
            </form>
          </div>
        </div>
        {/* {this.props.search.map((data) => (
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
        ))} */}
        <div className="offers">
          <img
            className="image"
            src="http://localhost:4600/uploads/o.png"
            alt="offer"
            style={{ height: "60px", width: "120px" }}
          />
          <h6 className="centered">
            <Nav.Link as={Link} to="/Offer">
              OFFERS
            </Nav.Link>
          </h6>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    search: state.search.searchResult,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { SearchProduct, FetchProductById })(
  Search
);
