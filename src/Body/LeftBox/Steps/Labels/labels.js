import React from "react";
import SingleLabel from "./singleLabel";
import "./labels.module.css";

function createLabels(labels) {
  let acc = [];
  let width = (1 / labels.length) * 100;

  for (let i = 0; i < labels.length; i++) {
    acc.push(
      <SingleLabel step={i + 1} label={labels[i]} width={width + "%"} />
    );
  }
  return acc;
}

class Label extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="container">{createLabels(this.props.steps)}</div>;
  }
}

export default Label;
