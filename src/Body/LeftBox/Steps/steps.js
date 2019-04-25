import React from "react";
import ProgressBar from "./progressbar";
import Labels from "./Labels/labels";

let steps = ["Transaction info", "Recipient info", "Make payment"];
let done = 1;

class LeftBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Labels steps={steps} done={done}/>
        <ProgressBar percent={(done / steps.length) * 100} />
      </div>
    );
  }
}

export default LeftBox;
