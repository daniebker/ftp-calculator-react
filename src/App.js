import React, { Component } from 'react';
import './App.css';

import ftpCalculator from './_services/ftpCalculator';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onFtpChange = this.onFtpChange.bind(this);
  }

  onFtpChange(event) {
    this.setState({
      ftp: ftpCalculator.calculateFtp(event.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>Value from 20 min Test</label>
          <input type="text" name="ftp" onChange={this.onFtpChange} />
        </form>
        {this.state.ftp &&
          <table>
            <thead>
              <tr>
                <th className="col">Zone</th>
                <th className="col">Min</th>
                <th className="col">Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="row">Active Recovery</th>
                <td></td>
                <td>{this.state.ftp.activeRecovery.max}</td>
              </tr>
              <tr>
                <th className="row">Endurance</th>
                <td>{this.state.ftp.endurance.min}</td>
                <td>{this.state.ftp.endurance.max}</td>
              </tr>
              <tr>
                <th className="row">Tempo</th>
                <td>{this.state.ftp.tempo.min}</td>
                <td>{this.state.ftp.tempo.max}</td>
              </tr>
              <tr>
                <th className="row">Sweet Spot</th>
                <td>{this.state.ftp.sweetSpot.min}</td>
                <td>{this.state.ftp.sweetSpot.max}</td>
              </tr>
              <tr>
                <th className="row">Threshold</th>                
                <td>{this.state.ftp.threshold.min}</td>
                <td>{this.state.ftp.threshold.max}</td>
              </tr>
              <tr>
                <th className="row">VO2 Max</th>                
                <td>{this.state.ftp.votwoMax.min}</td>
                <td>{this.state.ftp.votwoMax.max}</td>
              </tr>
              <tr>
                <th className="row">Aerobic Capacity</th>                
                <td>{this.state.ftp.aerobicCapacity.min}</td>
                <td>{this.state.ftp.aerobicCapacity.max}</td>
              </tr>
              <tr>
                <th className="row">FTP</th>
                <td>{this.state.ftp.value}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default App;
