import React from "react";
import ProgressBar from "./progressbar";
import Labels from "./Labels/labels";

class LeftBox extends React.Component {
  //calculate if done steps is greater than amount of steps
  calcDone(x, y){
    if(x>y){
      return y;
    } else {
      return x;
    }
  }
  //calculate width of progress bar according to amount of done steps
  calcPercent(x, y){
    return (this.calcDone(x, y) / y) * 100
  }

  render() {
    return (
      <div>
        <Labels steps={this.props.steps} done={this.calcDone(this.props.done, this.props.steps.length)}/>
        <ProgressBar percent={this.calcPercent(this.props.done, this.props.steps.length)} />
      </div>
    );
  }
}

LeftBox.defaultProps = {
  steps: ["Missing Steps values"],
  done: 0,
}

export default LeftBox;
