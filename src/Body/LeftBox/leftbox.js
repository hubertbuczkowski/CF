import React from "react";
import Steps from "./Steps/steps";

class LeftBox extends React.Component {
  render() {
    return <div className={this.props.className}><Steps /></div>;
  }
}

export default LeftBox;
