import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Logout, Logger } from "../../store/actions/user/user";
class Navigation extends Component {
  data = JSON.parse(localStorage.getItem("currentuser"));

  componentDidMount() {
    this.props.Logger();
  }

  render() {
    return (
      <Navbar className="navbar expand-lg bg-dark fixed-top fixed-top-2">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <NavDropdown title="ALL CATEGORIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ELECTRONICS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FOOTWARE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CLOTHES</NavDropdown.Item> */}
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">
               CLOTHES
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Shop">
              Shop
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link> */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Contactus">Contact Us</NavDropdown.Item>
            </NavDropdown>

            {this.props.user ? (
              <NavDropdown title="ADMIN" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addproduct">
                  Add Product
                </NavDropdown.Item>
                <NavDropdown.Item href="/updateproduct">
                  Update Product
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>

          <Nav inline="true">
            <Nav.Link as={Link} to="/wishlist">
              <Button className="btn btn-dark">
                <i className="fa fa-heart" aria-hidden="true"></i>
                &nbsp;
                <sup>
                  <span className="badge badge-success badge-sm">
                    {/* {this.props.wishlistitem.length > 0 ? this.props.wishlistitem.length : null} */}
                  </span>
                </sup>
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <Button className="btn btn-dark">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                &nbsp;
                <sup>
                  <span className="badge badge-success badge-sm">
                    {/* {this.props.items.length > 0 ? this.props.items.length : null} */}
                  </span>
                </sup>
              </Button>
            </Nav.Link>
          </Nav>
          <NavDropdown title="MY ACCOUNT" id="basic-nav-dropdown">
            {this.props.user ? (
              <NavDropdown.Item>
                <i className="fa fa-user"></i>&nbsp;
                {this.props.user.firstName} {this.props.user.lastName}
              </NavDropdown.Item>
            ) : null}

            {this.data ? (
              <NavDropdown.Item onClick={this.props.Logout}>
                Logout
              </NavDropdown.Item>
            ) : (
              <>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">
                  Registration
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.cart.items,
    user: state.login.data,
    wishlistitem: state.wishlist.wishlistitem,
  };
};

export default connect(mapStateToProps, { Logout, Logger })(Navigation);
