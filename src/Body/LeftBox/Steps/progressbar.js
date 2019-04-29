import React from "react";
import style from "./progressbar.module.css";

class ProgressBar extends React.Component {
  render() {
    return (
      <div className={style.outer}>
        <div className={`${style.inner} ${this.props.percent === 100 ? style.full : '' }`} style={{ width: `${this.props.percent}%` }} />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  percent: 0
}

export default ProgressBar;
