import React, { Component } from "react";
import Search from "./components/search/search";
import Navigation from "./components/navbar/navbar";
import { Route } from "react-router-dom";
import LoginUser from "./components/login/login";
import Register from "./components/register/registration";
import ContactUs from "./components/Contact/contact";
import Home from "./components/home/home";
import Shop from "./components/Products/product";
import Rating from "./components/Rating/rating";
import AboutUs from "./components/Aboutus/about_us";
import Cart from "./components/cart/cart";
import Privateroute from "./privateroute/index";
import Checkout from "./components/checkout/checkout";
import Payment from "./components/payment/payment";
import Offer from "./components/offerproduct/offer";
import ResetPassword from "./components/forgotpassword/forgotpassword";
import SetPassword from "./components/newpassword/newpassword";
import Wishlist from "./components/wishlist/wishlist";
import AddNewProduct from "./components/addProduct/addProduct";
import EditProduct from "./components/updateProduct/editProduct";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Search />
        <Navigation />
        <div className="container">
          <Route path="/Offer" component={Offer} />
          <Route path="/Login" component={LoginUser} />
          <Route path="/" exact component={Home} />
          <Route path="/Forgotpassword" component={ResetPassword} />
          <Route path="/Renewpassword" component={SetPassword} />
          <Route path="/Register" component={Register} />
          <Route path="/Contactus" component={ContactUs} />
          <Route path="/Home" component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Rating" component={Rating} />
          <Route path="/addproduct" component={AddNewProduct} />
          <Route path="/updateproduct/:id" component={EditProduct} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/cart" component={Cart} />
          <Route path="/Search/:name" component={Search} />
          <Privateroute path="/checkout" component={Checkout} />
          <Privateroute path="/payment" component={Payment} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
