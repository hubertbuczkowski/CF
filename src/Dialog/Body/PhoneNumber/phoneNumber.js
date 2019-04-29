import React from "react";
import style from "./phoneNumber.module.css";

class PhoneNumber extends React.Component {
  
  render() {
    return (
      <div className={style.outer}>
        <div className={style.main}>
          <div>{this.props.message}</div>
          <div className={style.number}>
              <div className={style.prefix}>{this.props.data.prefix}</div>
              <div className={style.mainNumber}>{this.props.data.number}</div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

PhoneNumber.defaultProps = {
  data: {prefix: "000", number: "000000000"},
  message: "Enter the code sent via SMS to "
}
export default PhoneNumber;
