import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = "https://api.covid19api.com/summary";

const Table = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get("https://api.covid19api.com/summary");
            setCountries(response.data.Countries);
            console.log(countries);
          } catch (error) {
            console.error(`API REQUEST FAILED:  ${error}`);
          }
    }
    
    const renderHeader = () => {
        let headerTH = ["Country", "New Confirmed", "TotalConfirmed","New Deaths","Total Deaths","New Recovered","Total Recovered"]
    
        return headerTH.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    const renderBody = () => {
        return countries && countries.map(({Slug, Country, NewConfirmed,TotalConfirmed,NewDeaths,TotalDeaths,NewRecovered,TotalRecovered }) => {
            return (
                <tr key={Slug}>
                    <td> <a href={Slug}> {Country} </a></td>
                    <td>{NewConfirmed}</td>
                    <td>{TotalConfirmed}</td>
                    <td>{NewDeaths}</td>
                    <td>{TotalDeaths}</td>
                    <td>{NewRecovered}</td>
                    <td>{TotalRecovered}</td>
                </tr>
            )
        })
    }

    return (
        <table className="Table">
            <thead className="Table__head">
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody className="Table__body"> 
                {renderBody()}
            </tbody>
        </table>
    )
}

export default Table;

