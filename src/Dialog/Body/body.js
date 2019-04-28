import React from "react";
import style from "./body.module.css";
import PhoneNumber from "./PhoneNumber/phoneNumber"
import InputCode from "./InputCode/inputCode";
import Footer from "./Footer/footer";



class Body extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <PhoneNumber data={this.props.data}>
          <InputCode ifFull={this.props.ifFull}/>
          <Footer />
        </PhoneNumber>
      </div>
    );
  }
}

export default Body;
