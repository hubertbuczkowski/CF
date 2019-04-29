import React from "react";
import style from "./header.module.css";
import Lock from "../../Assets/signs/lock";

class Header extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.top}>
          <div className={style.lock}><Lock className={style.lockImg}/></div>
          <div className={style.title}>{this.props.title}</div>
        </div>
        <div className={style.bottom}>{this.props.desc}</div>
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Identity verification required",
  desc: "For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device."
}

export default Header;