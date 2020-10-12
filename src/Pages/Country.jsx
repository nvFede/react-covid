import Axios from "axios";
import React, { Component, Fragment } from "react";
import axios from "axios";

import { Line } from "react-chartjs-2";

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      recovered: [],
    };
  }
  async componentDidMount() {
    try {
      const r = await axios.get(
        `https://api.covid19api.com/dayone/country/${this.props.match.params.slug}`
      );

      this.setState({
        data: r.data,
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
        {this.state.data.map((item, i) => (
          <li key={i}> {item.Active} </li>
        ))}
      </Fragment>
    );
  }
}
