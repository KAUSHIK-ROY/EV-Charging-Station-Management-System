import React, { useEffect, useState } from "react";
import API from "../api/api";
import MapView from "./MapView";
import StationForm from "./StationForm";
import "./StationList.css"; // optional

export default function StationList() {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [editing, setEditing] = useState(null);
  const [pendingEdit, setPendingEdit] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    connectorType: "",
    minPower: "",
  });

  const fetchStations = async () => {
    const res = await API.get("/stations");
    setStations(res.data);
  };

  useEffect(() => {
    fetchStations();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/stations/${id}`);
    fetchStations();
  };

  const filteredStations = stations.filter(
    (s) =>
      (filters.status === "" || s.status === filters.status) &&
      (filters.connectorType === "" ||
        s.connectorType
          .toLowerCase()
          .includes(filters.connectorType.toLowerCase())) &&
      (filters.minPower === "" ||
        parseFloat(s.powerOutput) >= parseFloat(filters.minPower))
  );

  return (
    <div className="grid-container">
      <header className="header">Charging Stations</header>

      <div className="left-panel">
        <StationForm fetchStations={fetchStations} editing={editing} />
        <h3 className="allStations">Available Stations</h3>
        <div className="station-list">
          {filteredStations.map((s) => (
            <div
              key={s.id}
              className="station-card"
              onClick={() => setSelectedStation(s)}
            >
              <strong>{s.name}</strong>
              <br />
              {s.connectorType} - {s.powerOutput} kW - {s.status}
              <div className="list-buttons">
                <button
                  className="edit-form"
                  onClick={() => {
                    setConfirmEdit(true);
                    setPendingEdit(s);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-form"
                  onClick={() => {
                    setConfirmDelete(true);
                    setPendingDelete(s.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel">
        
        {/* Filter Section */}
        <div className="filter-bar">
          <label>Status:</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <label style={{ marginLeft: "15px" }}>Connector:</label>
          <input
            placeholder="e.g. CCS"
            value={filters.connectorType}
            onChange={(e) =>
              setFilters({ ...filters, connectorType: e.target.value })
            }
          />
          <label style={{ marginLeft: "15px" }}>Min Power (kW):</label>
          <input
            type="number"
            placeholder="e.g. 50"
            value={filters.minPower}
            onChange={(e) =>
              setFilters({ ...filters, minPower: e.target.value })
            }
          />
        </div>

        {/* Map Section */}
        <div className="map-box">
          <MapView
            stations={filteredStations}
            selectedStation={selectedStation}
          />
        </div>
      </div>

      {confirmEdit && (
        <div className="box-background">
          <div className="confirm-box">
            <p>
              Are you sure you want to edit <strong>{pendingEdit?.name}</strong>
              ?
            </p>
            <div className="confirm-btns">
              <button
                className="confirm-no"
                onClick={() => setConfirmEdit(false)}
              >
                Cancel
              </button>
              <button
                className="confirm-yes"
                onClick={() => {
                  setEditing(pendingEdit);
                  setConfirmEdit(false);
                  setPendingEdit(null);
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="box-background">
          <div className="confirm-box">
            <p>Are you sure you want to delete this station?</p>
            <div className="confirm-btns">
              <button
                className="confirm-no"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
              <button
                className="confirm-yes2"
                onClick={() => {
                  handleDelete(pendingDelete);
                  setConfirmDelete(false);
                  setPendingDelete(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
