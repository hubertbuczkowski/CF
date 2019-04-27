import React from "react";
import style from "./footer.module.css";
import Redo from "../../../Assets/signs/redo";
import Call from "../../../Assets/signs/phone";


class Footer extends React.Component {
  render() {
    return (
        <div className={style.main}>
            <div className={style.sms}>
                <div className={style.redo}><Redo className={style.redoImg} /></div>
                Resend a new code
            </div>
            <div className={style.call}>
                <div className={style.redo}><Call className={style.redoImg} /></div>
                Receive code via call instead
            </div>
        </div>
    );
  }
}

export default Footer;
