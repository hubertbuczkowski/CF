import React from "react";
import Left from "./LeftBox/leftbox";
import Right from "./RightBox/rightbox";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Left />
        <Right />
      </div>
    );
  }
}

export default Body;
