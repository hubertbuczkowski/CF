import React from "react";
import Loading from "../signs/loader"
import style from "./spinner.module.css"

class Spinner extends React.Component {

    state={rotate:0, interval: null, style: {}}

    incremementRotate(){
        let degree = this.state.rotate;

        if(degree == 359)
        {
            degree = 0
        } else {
            degree++
        }

        let style = {
            '-ms-transform': `rotate(${degree}deg)`, /* IE 9 */
            '-webkit-transform': `rotate(${degree}deg)`, /* Safari */
            'transform': `rotate(${degree}deg)`
        }

        this.setState({rotate: degree, style: style})
    }

    componentDidMount(){
        this.setState({interval: setInterval(this.incremementRotate.bind(this), 8)});
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }
   
    render() {
        return (
            <div className={style.main}>
                <div className={style.inner}>
                    <div className={style.spinner} style={this.state.style}><Loading className={style.spinnerImg}/></div>
                    <div className={style.text} >{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default Spinner;
