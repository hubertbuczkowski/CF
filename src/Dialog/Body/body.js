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
          <InputCode error={this.props.error} values={this.props.values} ifFull={this.props.ifFull}/>
          <Footer />
        </PhoneNumber>
      </div>
    );
  }
}

Body.defaultProps = {
  data:[],
  error: '',
  values: [],
  ifFull: () => console.log("Missing ifFull function")
}

export default Body;
