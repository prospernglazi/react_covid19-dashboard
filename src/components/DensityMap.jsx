import React from 'react';
import { Map, Marker, PopUp, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import styles from './DensityMap.module.css';

export default function DensityMap() {
  return (
    <div className={styles.container}>
      <Map center={[-24.628208, 25.923147]} zoom={6}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          detectRetina={true}
          maxZoom={20}
          maxNativeZoom={17}
        />
      </Map>
    </div>
  );
}

// https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
