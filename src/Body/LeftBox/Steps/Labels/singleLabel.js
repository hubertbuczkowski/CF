import React from "react";
import style from "./singleLabel.module.css";

class SingleLabel extends React.Component {
  //return proper style according if sep is done or not
  styleColor(){
    if(this.props.done)
    {
      return style.singleLabelInnerDone;
    }
    else
    {
      return style.singleLabelInner
    }
  }
  render() {
    return (
      <div className={style.singleLabel}>
        <div className={this.styleColor()}>
          <div>Step {this.props.step}</div>
          <div>{this.props.label}</div>
        </div>
      </div>
    );
  }
}

SingleLabel.defaultProps = {
  done: 0,
  step: -1,
  label: "Missing label value"
}
export default SingleLabel;
