import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Chrono extends Component {
  state = {
    count: 0,
    myVar: "",
  };

  handleClickStop = () => {
    clearInterval(this.state.myVar);
  };
  handleClickReset = () => {
    this.setState({ count: 0 });
  };

  handleClickStart = () => {
    this.setState({
      myVar: setInterval(() => {
        return this.setState({ count: this.state.count + 1 });
      }, 1000),
    });
  };

  change = () => {
    var elem = document.getElementById("Btn");
    if (elem.value === "Start") {
      elem.value = "Stop";
      elem.onClick = this.handleClickStop;
    } else {
      elem.value = "Start";
      elem.onClick = this.handleClickStart;
    }
  };
  //Convert seconds to minutes and hours
  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = String(h).padStart(2, "0");
    var mDisplay = String(m).padStart(2, "0");
    var sDisplay = String(s).padStart(2, "0");
    return hDisplay + ":" + mDisplay + ":" + sDisplay;
  }

  render() {
    return (
      <div>
        <span>{this.secondsToHms(this.state.count)}</span>
        <div>
          <Button
            id="Btn"
            variant="info"
            style={{ marginRight: 10 }}
            onClick={this.handleClickStart}
          >
            Start
          </Button>
          <Button
            variant="info"
            onClick={this.handleClickStop}
            style={{ marginRight: 10 }}
          >
            Stop
          </Button>
          <Button variant="info" onClick={this.handleClickReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}
