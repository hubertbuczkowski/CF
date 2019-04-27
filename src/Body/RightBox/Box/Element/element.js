import React from "react";
import style from "./element.module.css"
import ElementValue from "./ElementValue/elementValue"

class Element extends React.Component {
    state= {mainClass : null, elements: []}

    returnElements(arr){
        let retVal = [];
        console.log(arr)
        arr.forEach(element => {
            retVal.push(<ElementValue title={element.title} value={element.value} type={this.props.type} last={element.last}/>)
        });
        return retVal;
    }

    componentDidMount(){
        if(this.props.type)
        {
            this.setState({mainClass : `${style.main} ${style[this.props.type]}`})
        }
        else{
            this.setState({mainClass : `${style.main}`})
        }

        this.setState({elements: this.returnElements(this.props.pass)})
    }
  
    render() {
        return (
            <div className={this.state.mainClass}>
                {this.state.elements}
            </div>
        );
    }
}

export default Element;
