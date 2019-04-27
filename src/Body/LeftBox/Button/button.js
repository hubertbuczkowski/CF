import React from "react";
import style from "./button.module.css"

class Button extends React.Component {
  render() {
    return (
    <div className={style.main}>
        <div onClick={() => this.props.onClick()} className={`${style.button} ${this.props.type ? style[this.props.type] : null}`}>{this.props.text}</div>
    </div>
    );
  }
}

export default Button;
