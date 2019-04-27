import React from "react";
import style from "./phoneNumber.module.css";

class PhoneNumber extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className={style.outer}>
        <div className={style.main}>
          <div>Enter the code sent via SMS to </div>
          <div className={style.number}>
              <div className={style.prefix}>{this.props.prefix}</div>
              <div className={style.mainNumber}>{this.props.number}</div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default PhoneNumber;
