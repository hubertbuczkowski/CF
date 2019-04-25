import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/header";
import Body from "./Body/body";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
