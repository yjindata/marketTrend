import React, { Component } from "react";
import Chat from "./Chat";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Avocado Market Trend</h2>
        <hr />
        <hr />
        <p>Hello! Welcome to avocado market trend app</p>
        <p>
          This is sample project for visualizing market trend and implementing
          chatbot to getting related information
        </p>
        <p>
          Currently, I am updating authentication and improving chatbot
          conversation
        </p>
        <br />
        <br />
        <br />
        {/* <Shoppinglist /> */}
        <Chat />
        {/* <ProductForm /> */}
      </div>
    );
  }
}

export default Home;
