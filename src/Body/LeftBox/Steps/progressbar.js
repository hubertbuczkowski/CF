import React from "react";
import style from "./progressbar.module.css";

class ProgressBar extends React.Component {
  render() {
    return (
      <div className={style.outer}>
        <div className={style.inner} style={{ width: `${this.props.percent}%` }} />
      </div>
    );
  }
}

export default ProgressBar;
