# ⚡ EV Charging Station Locator & Management System

A full-stack web application for managing and locating electric vehicle(EV) charging stations across any region.

This platform enables users to:
- 📍 View EV charging stations on an interactive map
- 🔍 Filter stations by status, power output, and connector type
- ✏️ Add, edit, and delete stations through an admin panel
- 🌐 View real-time data with map-based visual interface

---

## 🚀 Tech Stack

- **Frontend:** React.js, Axios, Leaflet (OpenStreetMap)
- **Backend:** Node.js, Express.js
- **Database:** MySQL with Sequelize ORM
- **API:** RESTful routes
- **Map Integration:** React Leaflet with OSM tiles

---

## 🌍 Use Case

This project is ideal for:
- EV charging network operators
- Smart city pilot programs
- Academic full-stack web development projects
- Demonstrating map-based CRUD operations

---

## 📂 Features

- Add new EV stations with geo-coordinates
- Edit existing station data
- Delete or deactivate stations
- Display all stations on a dynamic map
- Filter by power output, connector type, and status

---

## 🛠️ Setup Instructions

### 1. Clone this repository

```bash
git clone https://github.com/your-username/ev-charging-app.git
cd ev-charging-app
```


### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=5000
DB_NAME = chargers_db
DB_USER = root
DB_PASSWORD = your_mysql_password
DB_HOST = localhost
JWT_SECRET = your_secret_key
```

Run the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🧪 Sample API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/stations`      | Get all stations        |
| POST   | `/stations`      | Add a new station       |
| PUT    | `/stations/:id`  | Update a station        |
| DELETE | `/stations/:id`  | Delete a station        |

---

## 📦 Sample JSON for Adding a Station

```json
{
  "name": "Newtown EV Point",
  "latitude": 22.5937,
  "longitude": 88.4819,
  "status": "Active",
  "powerOutput": 60,
  "connectorType": "CCS"
}
```

---


## 📸 Screenshot

Here is a preview of the UI showing EV station details on the map:

![EV Station Map View](https://github.com/KAUSHIK-ROY/EV-Charging-Station-Management-System/blob/main/Screenshot%202025-06-03%20013027.png?raw=true)


---

## 🔧 Configuration Notes

- Make sure MySQL server is running before starting the backend
- Create the `ev_charging` database manually or with Sequelize sync
- Frontend and backend run on different ports (React on 3000, API on 5000)

---

## ✍️ Author

**Kaushik Roy**  
GitHub: [KAUSHIK-ROY](https://github.com/KAUSHIK-ROY)  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

