import React, { useState, useEffect } from "react";
import API from "../api/api";
import "./StationForm.css";

export default function StationForm({ fetchStations, editing }) {
  const [station, setStation] = useState({
    name: "",
    latitude: "",
    longitude: "",
    status: "Active",
    powerOutput: "",
    connectorType: "",
  });

  useEffect(() => {
    if (editing) setStation(editing);
  }, [editing]);

  const handleSubmit = async () => {
    if (station.id) {
      await API.put(`/stations/${station.id}`, station);
    } else {
      await API.post("/stations", station);
    }
    setStation({
      name: "",
      latitude: "",
      longitude: "",
      status: "Active",
      powerOutput: "",
      connectorType: "",
    });
    fetchStations();
  };

  return (
    <div className="station-form">
      <h3>{station.id ? "Edit" : "Add"} Station</h3>
      <div className="station-form-fields">
        <input
          placeholder="Name"
          value={station.name}
          onChange={(e) => setStation({ ...station, name: e.target.value })}
        />
        <input
          placeholder="Latitude"
          value={station.latitude}
          onChange={(e) => setStation({ ...station, latitude: e.target.value })}
        />
        <input
          placeholder="Longitude"
          value={station.longitude}
          onChange={(e) =>
            setStation({ ...station, longitude: e.target.value })
          }
        />
        <input
          placeholder="Power"
          value={station.powerOutput}
          onChange={(e) =>
            setStation({ ...station, powerOutput: e.target.value })
          }
        />
        <input
          placeholder="Connector"
          value={station.connectorType}
          onChange={(e) =>
            setStation({ ...station, connectorType: e.target.value })
          }
        />
        <select
          value={station.status}
          onChange={(e) => setStation({ ...station, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}
