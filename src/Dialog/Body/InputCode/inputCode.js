import React from "react";
import style from "./inputCode.module.css";

class InputCode extends React.Component {
  state = { values: [] }

  // unlock button if all digits are entered
  unlockButton(x){
    if(x.join('').length === 6)
    {
      this.props.ifFull(true, x);
    }
    else
    {
      this.props.ifFull(false, x);
    }
  }

  //verify if value entered is digit and if value is entered, moves to next input.
  //if value is the same, focus dont change
  valueChange(x){
    let values = this.props.values;
    let id = parseInt(x.target.id);
    let value = x.target.value;
    if(!isNaN(value) && value !== " " && value.length < 2)
    {
      values[id] = x.target.value
      if(value !== "")
      {
        if(x.currentTarget.nextElementSibling){
          x.currentTarget.nextElementSibling.focus()
        } else {
          x.currentTarget.blur();
        }
      }
    }
    else{
      x.target.value = ''
      values[id] = x.target.value
    }
    this.unlockButton(values)
  }

  //generate input fields
  generateInputs()
  {
    let resp = [];
    for(let i=0; i<6; i++){
      resp.push(<input autoFocus={i===0} onChange={(x) => this.valueChange(x)}  ref={i} id={i} value={this.props.values[i]} type='tel' />)
    }
    return resp;
  }

  render() {
    return (
      <div className={`${style.main} ${style[this.props.error]}`}>
        {this.generateInputs()}
      </div>
    );
  }
}

InputCode.defaultProps = {
  error: '',
  values: ['','','','','',''],
  ifFull: () => {console.log("missing ifFUll callback function passed")}

}

export default InputCode;
