import React from "react";

class SVG extends React.Component {
  render() {
    return (
        <svg width={'100%'} height={'100%'} viewBox="0 0 50 50">
            <circle style="fill:#48A0DC;" cx="25" cy="25" r="25"/>
            <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="37" x2="25" y2="39"/>
            <path style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M18,16
                c0-3.899,3.188-7.054,7.1-6.999c3.717,0.052,6.848,3.182,6.9,6.9c0.035,2.511-1.252,4.723-3.21,5.986
                C26.355,23.457,25,26.261,25,29.158V32"/>
        </svg>
   
    );
  }
}

export default SVG;
