import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/header";
import Body from "./Body/body";
import Dialog from "./Dialog/dialog"
import Spinner from "./Assets/spinner/spinner"
import './Assets/style.css';


//steps of transaction, number of elements can be added or decreased in case of future changes
//done steps starts from 1 not 0, if 0 -> no steps are selected
//done is moved to state to show that if code is 123456, steps will be increased
let steps = ["Transaction info", "Recipient info", "Make payment"];



//some data which can be loaded from backend to be presented in window 
//I tried to do application modular to enable to reuse as much elements as it is possible
let element = {
  left: [
    {
      label: "YOU SEND", 
      amount: "2000",
      currency: "EUR",
      selected: "selected",
      flag: "https://restcountries.eu/data/irl.svg"
    },
    {
      label:"Receiver Gets",
      amount:"1717.94",
      currency:"GBP",
      flag:"https://restcountries.eu/data/gbr.svg"
    }
  ],
  right:  {
    senderTitle: [{title:"Sending Details", value: null}],
    sender: [{title: "You send", value: 2000, last:"last", currency: "EUR"}],
    receiverTitle: [{title: "Receiving Details", value: `As of right now `}],
    receiver: [{title:"Rate", value: 0.86022}, {title:"Fee", value: "2.50", currency: "GBP"}, {title:"Delivery date", value: "25th November"}, {title:"Recipient gets", value: 1717.94, last:"last", currency: "GBP"},],
    footer: [{title:"You Save £66.19 compared to your bank!", value: null}]
  }
}

let data={
  prefix: "+353",
  number: "872251177"
}


class App extends React.Component {
  state = {showDialog: false, loading: true, done: 1}


  //set timeout which closes loading window when data are loaded.
  componentDidMount(){
    setTimeout(() => this.loadData(), 2000);
  }

  //function which closes and opens loading window
  loadData(){
    this.setState({loading: !this.state.loading})
  }

  //opens and closes dialog for code input
  changeDialog(){
    this.setState({showDialog: !this.state.showDialog})
  }

  //if dialog was closed with successfylly verified code, add step and can change window if it is needed
  process(){
    this.setState({done: this.state.done+1, showDialog: !this.state.showDialog});
  }

  //fuunction renders components depending if data are loading or are already loaded
  renderComonents(){
    if(this.state.loading){
      return <Spinner text="Loading..." />
    }else{
      return(
        [
          this.state.showDialog ? <Dialog
                                    key={2} 
                                    close={this.changeDialog.bind(this)}
                                    process={this.process.bind(this)}
                                    data={data}/> : null,
          <Body key={1} data={element} steps={steps} done={this.state.done} changeDialog={this.changeDialog.bind(this)}/>
        ]
      )
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderComonents()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
