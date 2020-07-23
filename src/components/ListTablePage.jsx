import React from 'react';
import './style.css';

export default function ListTablePage({
  country,
  confirmed,
  recovered,
  deaths,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{country || 'The World'}</td>
          <td>{confirmed}</td>
          <td>{recovered}</td>
          <td>{deaths}</td>
        </tr>
      </tbody>
    </table>
  );
}
