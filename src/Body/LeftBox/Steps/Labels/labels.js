import React from "react";
import SingleLabel from "./singleLabel";
import style from "./labels.module.css";

//create dynamically labels depending how many labels were passed from index
function createLabels(labels, done) {
  let acc = [];
  let width = (1 / labels.length) * 100;

  for (let i = 0; i < labels.length; i++) {
    acc.push(
      <SingleLabel done={done>i} step={i + 1} label={labels[i]} width={width + "%"} />
    );
  }
  return acc;
}

class Label extends React.Component {
  render() {
    return <div className={style.container}>{createLabels(this.props.steps, this.props.done)}</div>;
  }
}

Label.defaultProps = {
  steps: ["missing steps"],
  done: 0
}

export default Label;
