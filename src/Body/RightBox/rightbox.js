import React from "react";
import Box from "./Box/box"
import style from "./rightBox.module.css"

class RightBox extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Box />
      </div>
    );
  }
}

export default RightBox;
