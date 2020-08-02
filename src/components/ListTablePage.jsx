import React from 'react';
import './style.css';

export default function ListTablePage({ countries }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>Critical</th>
          <th>Tests</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.country}>
            <td>{country.country || 'The World'}</td>
            <td>{country.cases}</td>
            <td>{country.recovered}</td>
            <td>{country.deaths}</td>
            <td>{country.active}</td>
            <td>{country.critical}</td>
            <td>{country.tests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
