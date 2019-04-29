import React from "react";
import style from "./footer.module.css";
import Redo from "../../../Assets/signs/redo";
import Call from "../../../Assets/signs/phone";


class Footer extends React.Component {
  sendSMS(){
    //code to send SMS
  }
  call(){
    //code to make a call
  }
  render() {
    return (
        <div className={style.main}>
            <div onClick={this.sendSMS} className={style.sms}>
                <div className={style.redo}><Redo className={style.redoImg} /></div>
                {this.props.resend}
            </div>
            <div onClick={this.call} className={style.call}>
                <div className={style.redo}><Call className={style.redoImg} /></div>
                {this.props.recall}
            </div>
        </div>
    );
  }
}

Footer.defaultProps = {
  resend: "Resend a new code",
  recall: "Receive code via call instead"
}

export default Footer;
