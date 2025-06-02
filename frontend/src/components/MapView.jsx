import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const defaultCenter = [22.5726, 88.3639]; 

function ChangeView({ selected }) {
  const map = useMap();
  useEffect(() => {
    if (selected) {
      map.setView([Number(selected.latitude), Number(selected.longitude)], 15);
    }
  }, [selected, map]);
  return null;
}

export default function MapView({ stations, selectedStation }) {
  const popupRefs = useRef({});

  useEffect(() => {
    if (selectedStation && popupRefs.current[selectedStation.id]) {
      popupRefs.current[selectedStation.id].openPopup();
    }
  }, [selectedStation]);

  return (
    <MapContainer center={defaultCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <ChangeView selected={selectedStation} />

      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.latitude, station.longitude]}
          ref={(ref) => {
            if (ref) popupRefs.current[station.id] = ref;
          }}
        >
          <Popup>
            <strong>{station.name}</strong><br />
            Connector: {station.connectorType}<br />
            Power: {station.powerOutput} kW<br />
            Status: {station.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
