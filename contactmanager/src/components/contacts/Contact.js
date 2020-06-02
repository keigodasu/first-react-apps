import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Contact extends Component {
  state = {
    showContactInfo: true,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <h4 onClick={this.onShowClick}>{name}</h4>
              <i
                className="fas fa-times"
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
              />
              {showContactInfo ? (
                <ul>
                  <li>{email}</li>
                  <li>{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
