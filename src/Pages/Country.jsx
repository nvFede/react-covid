import Axios from "axios";
import React, { Component, Fragment } from "react";
import axios from "axios";

import { Line } from "react-chartjs-2";
import LineChart from "../components/LineChart";

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      recovered: [],
      actives: [],
      deaths: [],
      date: [],
      chartData: {},
    };
  }
  async componentDidMount() {
    try {
      const r = await axios.get(
        `https://api.covid19api.com/dayone/country/${this.props.match.params.slug}`
      );
      const actives = r.data.map(function (x) {
        return x.Active;
      });
      const recovered = r.data.map(function (x) {
        return x.Recovered;
      });
      const deaths = r.data.map(function (x) {
        return x.Deaths;
      });
      const date = r.data.map(function (x) {
        return x.Date;
      });
      this.setState({
        data: r.data,
        actives: actives,
        recovered: recovered,
        deaths: deaths,
        date: date,
        chartData: {
          labels: date,
          datasets: actives,
        },
      });

      console.log(r.data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.match.params.slug}</h1>
        {this.state.actives}

        <Line data={this.state.chartData} />
      </Fragment>
    );
  }
}
