import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { ForgotPassword } from "../../store/actions/user/forgotpassword";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        userLogin: {
          userEmail: this.state.userEmail,
        },
      };
      alert("Email send to your registered EmailId");
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
                      type="text"
                      id="userEmail"
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
                <div className="offset-sm-4 col-sm-10">
                  {/* <a onClick={() => this.props.history.push("/Renewpassword")} className="btn btn-warning">
                   Continue
                  </a> */}
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    align="center"
                  >
                    Continue
                  </button>
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
    loading: state.forgotPassword,
  };
};

export default connect(mapStateToProps, { ForgotPassword })(ResetPassword);
