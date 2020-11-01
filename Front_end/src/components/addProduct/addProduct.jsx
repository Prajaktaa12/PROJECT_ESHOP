import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import AddProduct from "../../store/actions/product/addProduct";
import "./addProduct.css";

class AddNewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        image:"",
        description:"",
        price:"",
        offerprice:"",
        isAvailable: true,
        isTodayOffer: true,
        category:"",
        subCategory:"",
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        name:this.state.name,
        image:this.state.image,
        description:this.state.description,
        price:this.state.price,
        offerprice:this.state.offerprice,
        isAvailable:this.state.isAvailable,
        isTodayOffer:this.state.isTodayOffer,
        category:this.state.category,
        subCategory:this.state.subCategory,
      };
      console.log(data);
      this.props.AddProduct(data);
      alert("done");
      this.props.history.push("/Shop");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleInputData = (e) => {
    this.setState({[e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
          <div className="card p-card">
          <div className="card-body p-body">
            <div className="row p-row">
              <div className="col-lg-12">
            <h5 className="title" align="center">
                ADD PRODUCT
              </h5>
              <form onSubmit={this.handleFormSubmit}>
              <div className="form-group" align="center">
                  <div className="row p-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={this.state.name}
                          placeholder="Product name"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "name",
                          this.state.name,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="image"
                          value={this.state.image}
                          placeholder="Image"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "image",
                          this.state.image,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row p-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="description"
                          value={this.state.description}
                          placeholder="Product description"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "description",
                          this.state.description,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          value={this.state.price}
                          placeholder="Price"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "price",
                          this.state.price,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row p-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="offerprice"
                          value={this.state.offerprice}
                          placeholder="Offer price"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "offerprice",
                          this.state.offerprice,
                          "required"
                        )}

                      </div>
                    </div>
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="category"
                          value={this.state.category}
                          placeholder="Product category"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "category",
                          this.state.category,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row p-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                      <input
                          type="text"
                          className="form-control"
                          name="subCategory"
                          value={this.state.subCategory}
                          placeholder="Product subcategory"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "subCategory",
                          this.state.subCategory,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                      <input
                          type="checkbox"
                          className="checkbox"
                          name="isTodayOffer"
                          value={this.state.isTodayOffer}
                          onChange={this.handleInputData}
                        />
                       Offer Available
                        {this.validator.message(
                          "isTodayOffer",
                          this.state.isTodayOffer,
                          "required"
                        )}
                      </div>
                    </div>
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                      <input
                          type="checkbox"
                          className="checkbox"
                          name="isAvailable"
                          value={this.state.isAvailable}
                          onChange={this.handleInputData}
                        />
                        Product In Stock
                        {this.validator.message(
                          "isAvailable",
                          this.state.isAvailable,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group row" align="center">
                    <div className="offset-sm-1 col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-primary btn-md"
                        align="center"
                      >
                        ADD PRODUCT
                      </button>
                      </div>
                      </div>
                  </div>
              </form>
            </div>
            </div>
            </div>
              </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { loading: state.addproduct };
};

export default connect(mapStateToProps,{AddProduct})(AddNewProduct);