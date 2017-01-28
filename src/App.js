import React, { Component } from 'react'; 
import './App.css';
import Range from './components/Range';
import Output from './components/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height:170,
      weight:65,
      bmi:22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height){
    this.setState({height:height}, this.setBmi);
  }

  weightChange(weight){
    this.setState({weight:weight}, this.setBmi);
  }

  setBmi(){
    let bmi = ((this.state.weight/this.state.height/this.state.height)*10000).toFixed(2);
    this.setState({bmi:bmi, bmiClass: this.getBmiClass(bmi)});
  }

  getBmiClass(bmi){
    if(bmi < 18.5) return 'Under Weight';
    if(bmi <= 24.9) return 'Normal';
    if(bmi <= 29.9) return 'Over Weight';
    if(bmi > 29.9) return 'Obese';
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>Weight</label>
            <Range value={this.state.weight} onChange={this.weightChange.bind(this)}/>
          </div>
        </form>
        <br/><br/>
        <Output data={this.state}/>
      </div>
    );
  }
}

export default App;
