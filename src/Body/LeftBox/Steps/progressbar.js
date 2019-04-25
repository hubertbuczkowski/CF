import React from "react";
import "./progressbar.module.css";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="outer">
        <div className="inner" style={{ width: `${this.props.percent}%` }} />
      </div>
    );
  }
}

export default ProgressBar;
