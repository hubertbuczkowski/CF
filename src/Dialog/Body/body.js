import React from "react";
import style from "./body.module.css";
import PhoneNumber from "./PhoneNumber/phoneNumber"
import InputCode from "./InputCode/inputCode";
import Footer from "./Footer/footer";

class Body extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <PhoneNumber prefix="+353" number="872251177">
          <InputCode />
          <Footer />
        </PhoneNumber>
      </div>
    );
  }
}

export default Body;
