# 🌍 Wild Horizons

Wild Horizons is a simple **Node.js HTTP API server** that provides information about **travel destinations** across the world.  
It allows users to fetch and filter destinations by **continent, country,** and **public accessibility**.

---

## 🚀 Features
- Get a list of all destinations.
- Filter by:
  - 🌎 **Continent** (e.g., Asia, Europe)
  - 🏳️ **Country** (e.g., India, Japan)
  - 🔓 **Is Open to Public** (true/false)
- Dedicated routes for fetching data by **country** or **continent**.
- Lightweight, no external frameworks (built on Node’s `http` module).

---

## 📂 Project Structure
wild-horizons/
│── data/ # Destination data
│── database/db.js # Simulates database fetch
│── utils/
│ ├── getFilteredData.js
│ ├── getDataByQuery.js
│ ├── sendResponse.js
│── index.js # Main server file
│── package.json


---

## ⚡ API Endpoints

### 1. `GET /api`
Returns all destinations or filtered results using query parameters.

#### Query Parameters:
- `continent` → filter by continent  
- `country` → filter by country  
- `is_open_to_public` → `true` or `false`

#### Example:
GET http://localhost:8000/api?country=India&is_open_to_public=false

Response:
```json
[
  {
    "name": "North Sentinel Island",
    "location": "Andaman Islands",
    "country": "India",
    "continent": "Asia",
    "is_open_to_public": false,
    "details": [
      { "fun_fact": "Inhabited by an uncontacted tribe, it is completely off-limits to visitors." }
    ]
  }
]


