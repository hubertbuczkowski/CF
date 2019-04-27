import React from "react";
import style from "./header.module.css";
import Lock from "../../Assets/signs/lock";

var desc = "For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device."

class Header extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.top}>
          <div className={style.lock}><Lock className={style.lockImg}/></div>
          <div className={style.title}>Identity verification required</div>
        </div>
        <div className={style.bottom}>{desc}</div>
      </div>
    );
  }
}

export default Header;

//<img src={Lock} color="#565656" />