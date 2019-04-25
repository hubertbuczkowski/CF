import React from "react";
import style from "./singleLabel.module.css";

class SingleLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let color = style.singleLabelInner;
    if(this.props.done)
    {
      color = style.singleLabelInnerDone;
    }
    return (
      <div className={style.singleLabel}>
        <div className={color}>
          <div>Step {this.props.step}</div>
          <div>{this.props.label}</div>
        </div>
      </div>
    );
  }
}

export default SingleLabel;
