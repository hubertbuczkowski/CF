import React from "react";

class SVG extends React.Component {
  render() {
    return (
        <svg width={'100%'} height={'100%'} viewBox="0 0 409.151 409.15"  >
            <g>
                <path className={this.props.className} d="M197.116,7.461c60.933,0,118.212,28.518,155.232,75.784l56.682-32.754l0.121,187.495l-162.438-93.645l52.206-30.21
		c-25.646-28.724-62.548-46.02-101.803-46.02c-75.25,0-136.465,61.213-136.465,136.465c0,75.25,61.216,136.468,136.465,136.468
		v60.645C88.432,401.689,0,313.267,0,204.577C0,95.891,88.429,7.461,197.116,7.461z"/>
            </g>
        </svg>
   
    );
  }
}

export default SVG;
