import React from "react";
import style from "./button.module.css"

class Button extends React.Component {
  render() {
    return (
    <div className={style.main}>
        <div className={style.button}>{this.props.text}</div>
    </div>
    );
  }
}

export default Button;
