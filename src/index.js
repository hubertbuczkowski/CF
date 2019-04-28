import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/header";
import Body from "./Body/body";
import Dialog from "./Dialog/dialog"
import Spinner from "./Assets/spinner/spinner"
import './Assets/style.css';


class App extends React.Component {
  state = {showDialog: false, loading: true }

  componentDidMount(){
    setTimeout(() => this.loadData(), 15000);
  }

  loadData(){
    this.setState({loading: false})
  }

  changeDialog(){
    this.setState({showDialog: !this.state.showDialog})
  }

  renderComonents(){
    if(this.state.loading){
      return <Spinner text="Loading..." />
    }else{
      return(
        [
          this.state.showDialog ? <Dialog close={this.changeDialog.bind(this)} /> : null,
          <Body changeDialog={this.changeDialog.bind(this)}/>
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
