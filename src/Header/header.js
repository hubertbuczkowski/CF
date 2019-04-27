import React from "react";
import style from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.picture} />
      </div>
    );
  }
}

export default Header;
