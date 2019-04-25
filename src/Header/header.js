import React from "react";
import "./styles.module.css";

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className={"header"}>
        <div className={"picture"} />
      </div>
    );
  }
}

export default Header;
