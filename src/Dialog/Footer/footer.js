import React from "react";
import style from "./footer.module.css";
import Button from "../../Body/LeftBox/Button/button"

class Footer extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.buttons}>
          <Button text="Verify Identity" type="locked"/>
          <div className={style.spacer}/>
          <Button text="Back" onClick={this.props.close} type={"Back".toLowerCase()} type="secondary"/>
        </div>
        <div className={style.access}>I can't access this mobile device</div>
      </div>
    );
  }
}

export default Footer;
