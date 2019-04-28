import React from "react";
import ProgressBar from "./progressbar";
import Labels from "./Labels/labels";



class LeftBox extends React.Component {

  render() {
    return (
      <div>
        <Labels steps={this.props.steps} done={this.props.done}/>
        <ProgressBar percent={(this.props.done / this.props.steps.length) * 100} />
      </div>
    );
  }
}

export default LeftBox;
