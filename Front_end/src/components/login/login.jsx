import React, { Component } from "react";
import { connect } from "react-redux";
import "./login.css";
import SimpleReactValidator from "simple-react-validator";
import { Login } from "../../store/actions/user/user";

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        userLogin: {
          userEmail: this.state.userEmail,
          userPassword: this.state.userPassword,
        },
      };
      //console.log(data);
      this.props.Login(data);
      // this.props.history.push("/home");
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
        <div>
          {this.props.ex_message ? (
            <div className="alert alert-success">
              {this.props.ex_message.message}
            </div>
          ) : null}
        </div>

        <div className="card crd">
          <div className="card-body cb">
            <h4 className="card-title" align="center">
              <i
                className="fa fa-user-circle-o fa-2x fa-fw"
                style={{ color: "rgb(37, 139, 255)" }}
              ></i>
            </h4>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group" align="center">
                <div className="col-md-12">
                  <input
                    type="text"
                    id="Email"
                    className="form-control"
                    name="userEmail"
                    value={this.state.userEmail}
                    placeholder="Email"
                    onChange={this.handleInputData}
                  />
                  {this.validator.message(
                    "userEmail",
                    this.state.userEmail,
                    "required|email"
                  )}
                </div>
              </div>
              <div className="form-group" align="center">
                <div className="col-md-12">
                  <input
                    type="password"
                    id="Password"
                    className="form-control"
                    name="userPassword"
                    value={this.state.userPassword}
                    placeholder="Password"
                    onChange={this.handleInputData}
                  />
                  {this.validator.message(
                    "userPassword",
                    this.state.userPassword,
                    "required"
                  )}
                </div>
              </div>
              <div className="form-group row" align="center">
                <div className="offset-sm-1 col-sm-10">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    align="center"
                  >
                    LOGIN
                  </button>
                  <div>
                    <a href="/Forgotpassword" align="center">
                      Forgot Password
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { loading: state.login, ex_message: state.login.data };
};

export default connect(mapStateToProps, { Login })(LoginUser);
