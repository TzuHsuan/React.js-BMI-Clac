import React, { Component } from 'react'; 

class Output extends Component {
  render() {
  	let bmi = this.props.data.bmi;
  	let bmiClass = this.props.data.bmiClass;
    return (
      <div className="Output">
      	{bmi}<br />
        {bmiClass}
      </div>
    );
  }
}

export default Output;
