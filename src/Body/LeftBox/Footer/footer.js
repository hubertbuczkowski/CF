import React from "react";
import style from "./footer.module.css"

class Footer extends React.Component {
  render() {
    return (
    <div className={style.main}>
        <div className={style.copyright}>&copy; {new Date().getFullYear()} CurrencyFair</div>
        <div className={style.other}>Help & Support</div>
        <div className={style.other}>Legal Stuff</div>
    </div>
    );
  }
}

export default Footer;
