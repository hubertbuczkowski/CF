import React from "react";
import style from "./footer.module.css";
import Button from "../../Body/LeftBox/Button/button"

class Footer extends React.Component {

  cantAcces() {

  }

  //action which are executed when user click on verify button, 
  //if button is unlocked, application verify code and then shows error or goes to next step
  submit(){
    if(this.props.active === "locked")
    {
    } else {
      this.props.verifyCode()
    }
  }

  render() {
    return (
      <div className={style.main}>
        <div className={style.buttons}>
          <Button text="Verify Identity" onClick={this.submit.bind(this)} type={this.props.active}/>
          <div className={style.spacer}/>
          <Button text="Back" onClick={this.props.close} type={"Back".toLowerCase()}/>
          <div className={style.spacer}/>
        </div>
        <div onClick={this.cantAcces} className={style.access}>{this.props.access}</div>
      </div>
    );
  }
}

Footer.defaultProps = {
  access: "I can't access this mobile device",
  close: () => console.log("Missing close function"),
  active: '',
  veifyCode: () => console.log("Missing verify function")
}

export default Footer;
