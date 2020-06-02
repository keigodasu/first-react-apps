import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1> this is contact</h1>
        <div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                placeholder="hoge"
                value={name}
              ></input>
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <input
                name="email"
                type="email"
                placeholder="hoge"
                value={email}
              ></input>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                type="text"
                placeholder="hoge"
                value={phone}
              ></input>
            </div>
            <input type="submit" placeholder="hoge" value="add contact"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
