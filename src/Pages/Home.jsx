import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("https://api.covid19api.com/summary");
      console.log(response.data.Countries.length);
      this.setState({
        data: response.data.Countries,
      });
    } catch (error) {
      console.log(error);
    }
  }

  loadRows = () =>
    this.state.data.map((countries) => (
      <tr key={countries.id} className="">
        <td>{countries.Country}</td>
        <td>{countries.NewConfirmed}</td>
        <td>{countries.TotalConfirmed}</td>
        <td>{countries.NewDeaths}</td>
        <td>{countries.TotalDeaths}</td>
        <td>{countries.NewRecovered}</td>
        <td>{countries.TotalRecovered}</td>
      </tr>
    ));

  render() {
    return (
      <Fragment>
        <table className="Table">
          <thead className="Table__head">
            <tr>
              <th>Country</th>
              <th>New Confirmed</th>
              <th>TotalConfirmed</th>
              <th>New Deaths</th>
              <th>Total Deaths</th>
              <th>New Recovered</th>
              <th>Total Recovered</th>
            </tr>
          </thead>
          <tbody className="Table__body">{this.loadRows()}</tbody>
        </table>
      </Fragment>
    );
  }
}
