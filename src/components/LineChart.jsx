import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {
  constructor() {
    super(this.props);
    this.state = {
      chartData: this.props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <div className="Chart">
        <Line data={this.state.chartData} />
      </div>
    );
  }
}
