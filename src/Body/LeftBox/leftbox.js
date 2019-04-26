import React from "react";
import Steps from "./Steps/steps";
import Transation from "./Transaction/transaction";
import Button from "./Button/button";
import Footer from "./Footer/footer"

class LeftBox extends React.Component {
  render() {
    return (<div className={this.props.className}>
      <Steps />
      <Transation />
      <Button text="Next"/>
      <Footer />
    </div>
    );
  }
}

export default LeftBox;
