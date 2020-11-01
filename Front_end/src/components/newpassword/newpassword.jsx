import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { SetNewPassword } from "../../store/actions/user/user";

class SetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPassword: "",
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        userLogin: {
          userPassword: this.state.userPassword,
        },
      };
      alert("Password Changed");
      console.log(data);
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
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title" align="center">
                <i class="fa fa-user-secret fa-3x fa-fw"></i>
              </h4>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group" align="center">
                  <div className="col-md-12">
                    <input
                      type="password"
                      id="userPassword"
                      className="form-control"
                      name="userPassword"
                      value={this.state.userPassword}
                      placeholder="Enter New Password"
                      onChange={this.handleInputData}
                    />
                    {this.validator.message(
                      "userPassword",
                      this.state.userPassword,
                      "required"
                    )}
                  </div>
                </div>
                <div className="offset-sm-4 col-sm-10">
                  <a
                    onClick={() => this.props.history.push("/Login")}
                    className="btn btn-warning"
                  >
                    Reset
                  </a>
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
  return {
    loading: state.resetPassword,
  };
};

export default connect(mapStateToProps, { SetNewPassword })(SetPassword);
