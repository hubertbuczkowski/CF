import React from "react";
import Steps from "./Steps/steps";
import Transation from "./Transaction/transaction";
import Button from "./Button/button";
import Footer from "./Footer/footer";

class LeftBox extends React.Component {
  render() {
    return (
    <div className={this.props.className}>
      <Steps steps={this.props.steps} done={this.props.done}/>
      <Transation data={this.props.data}/>
      <Button onClick={this.props.changeDialog} text="Next"/>
      <Footer />
    </div>
    );
  }
}

LeftBox.defaultProps = {
  className: '',
  steps: ["missing Steps"],
  done: 0,
  data:[],
  changeDialog: () => {console.log("missing dialog")}
}

export default LeftBox;
