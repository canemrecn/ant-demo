import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = pos.coords.accuracy;

      let marker = L.marker([lat, lng]).addTo(map);
      let circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

      map.fitBounds(circle.getBounds());
      map.setView([lat, lng]);
    };

    const error = (err) => {
      if (err.code === 1) {
        alert("Please allow geolocation access.");
      } else {
        alert("Cannot get current location.");
      }
    };

    navigator.geolocation.watchPosition(success, error);

  }, []);

  return <div id="map" style={{ height: '350px' }} />;
};

export default MapComponent;
