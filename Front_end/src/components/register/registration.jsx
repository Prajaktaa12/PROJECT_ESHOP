import React, { Component } from "react";
import "./registration.css";
import SimpleReactValidator from "simple-react-validator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Registration } from "../../store/actions/user/user";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      newsLetterCheck: true,
      userEmail: "",
      userPassword: "",
      termsAcceptCheck: true,
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleFormData = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        newsLetterCheck: this.state.newsLetterCheck,
        userLogin: {
          userEmail: this.state.userEmail,
          userPassword: this.state.userPassword,
        },
        termsAcceptCheck: this.state.termsAcceptCheck,
      };
      //console.log(data);
      this.props.Registration(data);
      setTimeout(() => {
        alert("SUCCESSFULLY REGISTERED");
        this.props.history.push("/login");
      }, 2000);
    } else {
      this.validator.showMessages();

      this.forceUpdate();
    }
  };

  handleInputData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container" align="center">
          <div className="card register">
            <div className="card-body register-body">
              <h4 className="card-title" align="center">
                <i
                  className="fa fa-user-circle-o fa-2x fa-fw"
                  style={{ color: "rgb(37, 139, 255)" }}
                ></i>
              </h4>
              <form onSubmit={this.handleFormData}>
                <div className="form-group" align="center">
                  <div className="row register-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={this.state.firstName}
                          placeholder="Firstname"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "firstName",
                          this.state.firstName,
                          "alpha|required"
                        )}
                      </div>
                    </div>
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={this.state.lastName}
                          placeholder="Lastname"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "lastName",
                          this.state.lastName,
                          "alpha|required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row register-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="userEmail"
                          value={this.state.userEmail}
                          placeholder="Email"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "userEmail",
                          this.state.userEmail,
                          "email|required"
                        )}
                      </div>
                    </div>
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <input
                          type="password"
                          className="form-control"
                          name="userPassword"
                          value={this.state.userPassword}
                          placeholder="Password"
                          onChange={this.handleInputData}
                        />
                        {this.validator.message(
                          "userPassword",
                          this.state.userPassword,
                          "password|required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row register-row">
                    <div className="col-xs-1-12">
                      <div className="col-sm-12">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="newsLetterCheck"
                            value={this.state.newsLetterCheck}
                            onChange={this.handleInputData}
                          />
                          &nbsp; Subscribe
                          {this.validator.message(
                            "newsLetterCheck",
                            this.state.newsLetterCheck,
                            "|required"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row register-row">
                    <div className="col-xs-1-12">
                      <div className="col-lg-12">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="termsAcceptCheck"
                            value={this.state.termsAcceptCheck}
                            onChange={this.handleInputData}
                          />
                          &nbsp; Accept Term and Policies
                          {this.validator.message(
                            "termsAcceptCheck",
                            this.state.termsAcceptCheck,
                            "|required"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row" align="center">
                    <div className="offset-sm-1 col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                        align="center"
                      >
                        REGISTER
                      </button>
                      <div>
                        <p className="p">
                          Already have an account?
                          <Link className="Login" to="/login">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { loading: state.register };
};

export default connect(mapStateToProps, { Registration })(Register);
