import React from "react";

class SingleLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="singleLabel">
        <div className="singleLabelInner">
          <div>Step {this.props.step}</div>
          <div>{this.props.label}</div>
        </div>
      </div>
    );
  }
}

export default SingleLabel;
