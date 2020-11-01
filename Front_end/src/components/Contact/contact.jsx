import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { Contact } from "../../store/actions/contact/contact";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Message: "",
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        Name: this.state.Name,
        Email: this.state.Email,
        Message: this.state.Message,
      };
      console.log(data);
      this.props.Contact(data);
      alert("done");
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
          <div className="card text-left">
            <div className="card-body">
              <div className="col-lg-12">
                <h3 className="h">Contact Us </h3>
              </div>
              <form onSubmit={this.handleFormSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Full Name</label>

                      <input
                        type="text"
                        id="Name"
                        className="form-control"
                        name="Name"
                        value={this.state.Name}
                        placeholder="Name"
                        onChange={this.handleInputData}
                      />
                      {this.validator.message(
                        "Name",
                        this.state.Name,
                        "required"
                      )}
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>

                      <input
                        type="text"
                        id="Email"
                        className="form-control"
                        name="Email"
                        value={this.state.Email}
                        placeholder="Email"
                        onChange={this.handleInputData}
                      />
                      {this.validator.message(
                        "Email",
                        this.state.Email,
                        "required|email"
                      )}
                    </div>
                    {/* <div className="col-lg-12">
                      <button
                        type="submit"
                        className="float-right btn btn-primary btn-sm"
                        id="btnContactUs"
                      >
                        Send Message
                      </button>
                    </div> */}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Message</label>
                      <input
                        type="text"
                        id="Message"
                        className="form-control"
                        name="Message"
                        value={this.state.Message}
                        placeholder="Message"
                        onChange={this.handleInputData}
                      />
                      {this.validator.message(
                        "Message",
                        this.state.Message,
                        "require"
                      )}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <button
                      type="submit"
                      className="float-right btn btn-primary btn-sm"
                      id="btnContactUs"
                    >
                      Send Message
                    </button>
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
  return {
    loading: state.contact,
  };
};

export default connect(mapStateToProps, { Contact })(ContactUs);
