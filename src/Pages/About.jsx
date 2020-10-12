import React, { Component, Fragment } from "react";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="about" id="about">
          <p>
            COVID-19 affects in different ways depending on each person. Most
            people who are infected have symptoms of mild or moderate intensity,
            and they recover without the need for hospitalization.
          </p>
          <p>
            <br />
            <strong>The most common symptoms are the following:</strong>
          </p>
          <ul className="about__list">
            <li className="about__list--item">Fever</li>
            <li className="about__list--item">Dry cough</li>
            <li className="about__list--item">Fatigue</li>
          </ul>
          <p>
            <strong>Other less common symptoms include the following:</strong>
          </p>
          <ul className="about__list">
            <li className="about__list--item">Aches and pains</li>
            <li className="about__list--item">Sore throat</li>
            <li className="about__list--item">Diarrhea</li>
            <li className="about__list--item">Conjunctivitis</li>
            <li className="about__list--item">Headache</li>
            <li className="about__list--item">
              Loss of sense of smell or taste
            </li>
            <li className="about__list--item">
              Skin rashes or loss of color on the fingers or toes
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
