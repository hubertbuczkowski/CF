import React from "react";
import Box from "./Box/box"


class RightBox extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Box data={this.props.data}/>
      </div>
    );
  }
}

export default RightBox;
