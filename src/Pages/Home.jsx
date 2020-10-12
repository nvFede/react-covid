import React, { Component, Fragment } from "react";

import axios from "axios";

const opt = { style: "decimal" };
const numberFormat = new Intl.NumberFormat(opt);

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      global: [],
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("https://api.covid19api.com/summary");

      this.setState({
        global: response.data.Global,
        data: response.data.Countries,
      });
    } catch (error) {
      console.error(`API REQUEST FAILED:  ${error}`);
    }
  }

  loadRows = () =>
    this.state.data.map((countries) => (
      <tr key={countries.id} className="Country">
        <td>{countries.Country}</td>
        <td>{numberFormat.format(countries.NewConfirmed)}</td>
        <td>{numberFormat.format(countries.TotalConfirmed)}</td>
        <td>{numberFormat.format(countries.NewDeaths)}</td>
        <td>{numberFormat.format(countries.TotalDeaths)}</td>
        <td>{numberFormat.format(countries.NewRecovered)}</td>
        <td>{numberFormat.format(countries.TotalRecovered)}</td>
      </tr>
    ));

  render() {
    return (
      <Fragment>
        <section className="Global">
          <div className="Grid">
            <div className="card">
              <h3>New Confirmed</h3>
              <h2>{numberFormat.format(this.state.global.NewConfirmed)}</h2>
              <h3>Total Confirmed</h3>
              <h2>{numberFormat.format(this.state.global.TotalConfirmed)}</h2>
            </div>
            <div className="card">
              <h3>New Deaths</h3>
              <h2>{numberFormat.format(this.state.global.NewDeaths)}</h2>
              <h3>Total Deaths</h3>
              <h2>{numberFormat.format(this.state.global.TotalDeaths)}</h2>
            </div>
            <div className="card">
              <h3>New Recovered</h3>
              <h2 className="positive">
                {numberFormat.format(this.state.global.NewRecovered)}
              </h2>
              <h3>Total Recovered</h3>
              <h2 className="positive">
                {numberFormat.format(this.state.global.TotalRecovered)}
              </h2>
            </div>
          </div>
        </section>

        <main className="Main">
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
        </main>
      </Fragment>
    );
  }
}
